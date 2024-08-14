//ADD TARGET FUNCTIONS WORKING WITH SWR

export const addTargetMutation = async (
  newTarget,
  targets,
  toastSuccess,
  toastError
) => {
  const response = await fetch("/api/v1/targets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTarget),
  });
  if (response.ok) {
    toastSuccess(`${newTarget.title} added successfull`);
  } else {
    toastError("Something went wrong");
  }
  return [...targets, newTarget].sort((a, b) => a.created_at - b.created_at);
};

export const addTargetMutationOptions = (newTarget, targets) => {
  return {
    optimisticData: [...targets, newTarget].sort(
      (a, b) => a.created_at - b.created_at
    ),
    rollbackOnerror: true,
    populateCache: true,
    revalidate: false,
  };
};

//DELETE TARGET FUNCTIONS WORKING WITH SWR

export const deleteTargetMutation = async (
  targets,
  id,
  toastSuccess,
  toastError
) => {
  const response = await fetch("/api/v1/targets", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then();
  if (response.ok) {
    toastSuccess(
      targets.map((target) =>
        target._id === id ? `${target.title} has been deleted successfuly` : ""
      )
    );
  } else {
    toastError("Something went wrong");
  }
  return targets.filter((item) => item._id !== id);
};

export const deleteTargetMutationOptions = (id, targets) => {
  return {
    optimisticData: targets.filter((item) => item._id !== id),
    rollbackOnerror: true,
    populateCache: true,
    revalidate: false,
  };
};

// //UPDATE TARGET FUNCTIONS WORKING WITH SWR

export const updateTargetHelper = async (id, isenabled) => {
  const response = await fetch("/api/v1/targets", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, disabled: !isenabled }),
  });
  return response;
};
