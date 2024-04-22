const FrameComponent = () => {
  return (
    <footer className="self-stretch flex flex-col items-start justify-start pt-[4.062rem] px-[12.625rem] pb-[0.875rem] box-border relative gap-[7.375rem] max-w-full text-center text-[3.313rem] text-white font-poppins mq450:gap-[1.813rem] mq450:pt-[2.625rem] mq450:px-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq1050:gap-[3.688rem] mq1050:pl-[6.313rem] mq1050:pr-[6.313rem] mq1050:box-border">
      <div className="w-full h-full absolute !m-[0] right-[0rem] bottom-[-0.062rem] left-[0rem] [background:linear-gradient(100.89deg,_rgba(175,_71,_248,_0.9),_rgba(89,_95,_251,_0.9)_44.5%,_rgba(30,_203,_227,_0.9))]" />
      <div className="self-stretch flex flex-row items-start justify-center max-w-full">
        <div className="w-[30.25rem] flex flex-col items-start justify-start gap-[0.812rem] max-w-full">
          <div className="self-stretch relative leading-[138.9%] font-light z-[1] mq450:text-[2rem] mq450:leading-[2.75rem] mq1050:text-[2.625rem] mq1050:leading-[3.688rem]">
            START TRADINGIN LESS THAN 30 SECS
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.562rem] box-border max-w-full text-[0.875rem] text-gray-500 mq750:pl-[1.75rem] mq750:pr-[1.75rem] mq750:box-border">
            <div className="flex-1 relative leading-[200.4%] font-light inline-block max-w-full z-[1]">
              Install Phantom and connect your wallet to log in.
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-[0.75rem] leading-[200.4%] font-light text-left z-[1]">
        © Lumina wallet Inc. 2024
      </div>
    </footer>
  );
};

export default FrameComponent;
