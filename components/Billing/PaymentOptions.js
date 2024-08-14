import NavBar from "../Navigation/NavBar";

function PaymentOptions() {
    return (
        <div className="w-[1920px] h-[1080px] relative bg-zinc-900">
         <NavBar />
        <div className="w-[129px] h-3.5 left-[418px] top-[95px] absolute text-white text-base font-normal font-['Inter']">Streaming Setup</div>
        <div className="w-[87px] h-[30px] left-[296px] top-[89px] absolute">
            <div className="w-[87px] h-[30px] left-0 top-0 absolute bg-white bg-opacity-5 rounded border-l border-red-400" />
            <div className="w-[65.25px] h-[15px] left-[11.60px] top-[6px] absolute text-white text-base font-normal font-['Inter']">Account</div>
        </div>
        <div className="w-[262px] h-[0px] left-[291px] top-[129px] absolute border border-white border-opacity-10"></div>
        <div className="w-[1060px] h-[898px] left-[558px] top-[189px] absolute bg-zinc-300 bg-opacity-10 rounded-[3px] border border-white border-opacity-20" />
        <div className="w-[306px] h-[47px] left-[592px] top-[203px] absolute text-white text-4xl font-normal font-['Inter']">Billing /payment</div>
        <div className="left-[581px] top-[290px] absolute text-white text-[15px] font-normal font-['Inter']">Passed invoices</div>
        <div className="left-[581px] top-[335px] absolute text-white text-[15px] font-normal font-['Inter']">Payment details</div>
        <div className="left-[582px] top-[376px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Credit balance</div>
        <div className="left-[582px] top-[417px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Add credit</div>
        <div className="left-[582px] top-[458px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Upcoming invoices</div>
        <div className="left-[582px] top-[499px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Paid invoices</div>
        <div className="left-[582px] top-[540px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Unpaid invoices</div>
        <div className="w-[109px] h-[0px] left-[585px] top-[364px] absolute border border-red-400"></div>
        <div className="w-[993px] h-[0px] left-[581px] top-[271px] absolute border border-white border-opacity-20"></div>
        <div className="w-[795px] h-[0px] left-[743px] top-[275px] absolute origin-top-left rotate-90 border border-neutral-700"></div>
        <div className="w-[512px] h-[512px] left-[828px] top-[252px] absolute" />
        <div className="left-[789px] top-[285px] absolute text-white text-2xl font-normal font-['Inter']">Payment options </div>
        <div className="w-[744px] h-[716px] left-[770px] top-[325px] absolute bg-zinc-300 bg-opacity-0 border border-white border-opacity-20" />
        <div className="left-[828px] top-[349px] absolute text-white text-opacity-60 text-[15px] font-normal font-['Inter']">Pay With:</div>
        <div className="w-[58px] h-[18px] left-[1463px] top-[137px] absolute" />
        <div className="w-[688px] h-[57px] left-[801px] top-[385px] absolute bg-white bg-opacity-5 border border-white border-opacity-40" />
        <div className="w-[688px] h-[57px] left-[801px] top-[483px] absolute bg-white bg-opacity-5 border border-white border-opacity-30" />
        <div className="w-[688px] h-[57px] left-[801px] top-[580px] absolute bg-white bg-opacity-5 border border-white border-opacity-30" />
        <div className="left-[849px] top-[402px] absolute text-neutral-900 text-[15px] font-normal font-['Inter']">Credit Card</div>
        <div className="left-[855px] top-[503px] absolute text-neutral-900 text-[15px] font-normal font-['Inter']">PayPal</div>
        <div className="left-[850px] top-[600px] absolute text-neutral-900 text-[15px] font-normal font-['Inter']">Select other payment Methods</div>
        <img className="w-20 h-20 left-[1358px] top-[474px] absolute" src="/images/visa.png" alt="visa" />
        <img className="w-[65px] h-[65px] left-[1358px] top-[382px] absolute" src="/images/paypal.png" alt="paypal"/>

        <div className="w-6 h-6 left-[816px] top-[402px] absolute" />
        <div className="w-6 h-6 left-[814px] top-[501px] absolute" />
        <div className="w-[30px] h-[30px] left-[1415px] top-[624px] absolute origin-top-left rotate-180 bg-white bg-opacity-10 text-red-400" >
              {/* <FontAwesomeIcon icon={faChevronUp} /> */}
        </div>
        <div className="w-[241px] h-[291px] left-[296px] top-[188px] absolute bg-zinc-300 bg-opacity-10 rounded-[3px] border border-white border-opacity-20" />
        <div className="w-60 h-[53px] left-[297px] top-[298px] absolute bg-white bg-opacity-10 border-l-2 border-red-400" />
        <div className="w-[116px] h-3.5 left-[367px] top-[222px] absolute text-white text-base font-normal font-['Inter']">Profile Settings</div>
        <div className="w-[132px] h-10 left-[350px] top-[513px] absolute">
            <div className="w-[132px] h-10 left-0 top-0 absolute bg-red-400 rounded-[5px]" />
            <div className="w-[119px] left-[7px] top-[11px] absolute text-white text-base font-normal font-['Inter']">Delete Account</div>
        </div>
        <div className="w-6 h-6 left-[323px] top-[217px] absolute" />
        <div className="w-[75px] h-3.5 left-[360px] top-[315px] absolute text-white text-base font-normal font-['Inter']">Billing</div>
        <div className="w-[75px] h-3.5 left-[356px] top-[365px] absolute text-white text-base font-normal font-['Inter']">Activities</div>
        <div className="w-[75px] h-3.5 left-[364px] top-[426px] absolute text-white text-base font-normal font-['Inter']">Support</div>
        <div className="w-6 h-6 left-[320px] top-[368px] absolute" />
        <div className="w-[118px] left-[320px] top-[263px] absolute">
            <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
            <div className="w-[75px] h-3.5 left-[43px] top-[5px] absolute text-white text-base font-normal font-['Inter']">Password</div>
        </div>
    </div>

    );
}
export default PaymentOptions;