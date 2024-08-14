import NavBar from "../Navigation/NavBar";

function PaymentDetails() {
    return (

<div className="w-[1920px] h-[1080px] relative bg-zinc-900">
    <div className="w-4 h-4 left-0 top-0 absolute" />
    <NavBar />
    <div className="w-[129px] h-3.5 left-[418px] top-[95px] absolute text-white text-base font-normal font-['Inter']">Streaming Setup</div>
    <div className="w-[87px] h-[30px] left-[296px] top-[89px] absolute">
        <div className="w-[87px] h-[30px] left-0 top-0 absolute bg-white bg-opacity-5 rounded border-l border-red-400" />
        <div className="w-[65.25px] h-[15px] left-[11.60px] top-[6px] absolute text-white text-base font-normal font-['Inter']">Account</div>
    </div>
    <div className="w-[262px] h-[0px] left-[291px] top-[129px] absolute border border-white border-opacity-10"></div>
    <div className="left-[581px] top-[290px] absolute text-white text-[15px] font-normal font-['Inter']">Passed invoices</div>
    <div className="left-[787px] top-[299px] absolute text-white text-2xl font-normal font-['Inter']">Make Payment</div>
    <div className="left-[581px] top-[335px] absolute text-white text-[15px] font-normal font-['Inter']">Payment details</div>
    <div className="left-[582px] top-[376px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Credit balance</div>
    <div className="left-[582px] top-[417px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Add credit</div>
    <div className="left-[582px] top-[458px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Upcoming invoices</div>
    <div className="left-[582px] top-[499px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Paid invoices</div>
    <div className="left-[582px] top-[540px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Unpaid invoices</div>
    <div className="w-[109px] h-[0px] left-[582px] top-[363px] absolute border border-red-400"></div>
    <div className="w-[993px] h-[0px] left-[581px] top-[271px] absolute border border-white border-opacity-20"></div>
    <div className="w-[795px] h-[0px] left-[743px] top-[275px] absolute origin-top-left rotate-90 border border-neutral-700"></div>
    <div className="w-[822px] h-[97px] left-[777px] top-[420px] absolute bg-zinc-300 bg-opacity-5 border border-white border-opacity-30" />
    <div className="w-[822px] h-[97px] left-[777px] top-[613px] absolute bg-zinc-300 bg-opacity-5 border border-white border-opacity-30" />
    <div className="left-[960px] top-[427px] absolute text-green-400 text-2xl font-normal font-['Inter']">Pay Now</div>
    <div className="left-[955px] top-[627px] absolute text-green-400 text-2xl font-normal font-['Inter']">Choose Another Offer</div>
    <div className="left-[1474px] top-[426px] absolute text-white text-2xl font-normal font-['Inter']">Pay only</div>
    <div className="left-[1486px] top-[467px] absolute text-red-400 text-2xl font-normal font-['Inter']">$34.7</div>
    <div className="left-[960px] top-[466px] absolute text-white text-opacity-95 text-2xl font-normal font-['Inter']">Save  up to 10% by paying on time</div>
    <div className="w-[628px] h-[22px] left-[942px] top-[665px] absolute text-white text-opacity-95 text-2xl font-normal font-['Inter']">Get a whole new experience with our available offers<br/></div>
    <div className="w-[70px] h-[70px] left-[824px] top-[625px] absolute bg-zinc-300 bg-opacity-10 rounded-full" />
    <div className="w-[70px] h-[70px] left-[828px] top-[431px] absolute bg-zinc-300 bg-opacity-10 rounded-full" />
    <div className="w-[30px] h-[30px] left-[848px] top-[453px] absolute bg-white bg-opacity-0" />
    <div className="w-[30px] h-[30px] left-[844px] top-[645px] absolute" />
    <div className="w-[315px] h-[47px] left-[592px] top-[203px] absolute text-white text-4xl font-normal font-['Inter']">Billing /payment</div>
    <div className="w-[241px] h-[291px] left-[283px] top-[188px] absolute bg-zinc-300 bg-opacity-10 rounded-[3px] border border-white border-opacity-20" />
    <div className="w-60 h-[53px] left-[283px] top-[294px] absolute bg-white bg-opacity-10 border-l-2 border-red-400" />
    <div className="w-[116px] h-3.5 left-[354px] top-[222px] absolute text-white text-base font-normal font-['Inter']">Profile Settings</div>
    <div className="w-[132px] h-10 left-[337px] top-[513px] absolute">
        <div className="w-[132px] h-10 left-0 top-0 absolute bg-red-400 rounded-[5px]" />
        <div className="w-[119px] left-[7px] top-[11px] absolute text-white text-base font-normal font-['Inter']">Delete Account</div>
    </div>
    <div className="w-6 h-6 left-[310px] top-[217px] absolute" />
    <div className="w-[75px] h-3.5 left-[347px] top-[315px] absolute text-white text-base font-normal font-['Inter']">Billing</div>
    <div className="w-[75px] h-3.5 left-[343px] top-[365px] absolute text-white text-base font-normal font-['Inter']">Activities</div>
    <div className="w-[75px] h-3.5 left-[351px] top-[426px] absolute text-white text-base font-normal font-['Inter']">Support</div>
    <div className="w-6 h-6 left-[307px] top-[368px] absolute" />
    <div className="w-[118px] left-[307px] top-[263px] absolute">
        <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
        <div className="w-[75px] h-3.5 left-[43px] top-[5px] absolute text-white text-base font-normal font-['Inter']">Password</div>
    </div>
</div>
    );
}
export default PaymentDetails;