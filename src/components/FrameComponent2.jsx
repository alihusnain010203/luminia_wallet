import { Button } from "@mui/material";

const FrameComponent2 = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState('English');
  // const handleLanguageChange = (event) => {
  //   setSelectedLanguage(event.target.value);
  // };
  return (
    <header className="w-[95.938rem] h-[6.938rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4.812rem] box-border max-w-full text-left text-[1.125rem] text-white font-poppins">
      <div className="self-stretch w-[75.563rem] flex flex-row items-end justify-between gap-[1.25rem] max-w-full mq750:w-[55.313rem]">
        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem]">
          <div className="flex flex-row items-start justify-start gap-[0.468rem]">
            <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.969rem] h-[1.425rem] relative"
                loading="lazy"
                alt=""
                src="/nounwallet6766664-1.svg"
              />
            </div>
            <div className="relative font-semibold inline-block min-w-[8rem] whitespace-nowrap">
              Lumina wallet
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.312rem] max-w-full text-[0.813rem] mq750:hidden">
          <Button
            className="self-stretch w-[5.438rem] z-[2]"
            startIcon={
              <img width="16px" height="16px" src="/svgexport22.svg" />
            }
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "13",
              background: "#2e2e55",
              borderRadius: "5px",
              "&:hover": { background: "#2e2e55" },
              width: 87,
            }}
          >
            BSC
          </Button>
          <div className="w-[3.688rem] flex flex-col items-start justify-start pt-[0.375rem] pb-[0rem] pr-[0.562rem] pl-[0rem] box-border">
            <div className="relative font-semibold inline-block min-w-[3rem] z-[2]">
              English
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0.437rem] px-[1.062rem] relative whitespace-nowrap z-[2] text-center">
            <button className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs [background:linear-gradient(100.89deg,_rgba(175,_71,_248,_0.9),_rgba(89,_95,_251,_0.9)_44.5%,_rgba(30,_203,_227,_0.9))]" />
            <div className="relative font-semibold inline-block min-w-[6.375rem] z-[1]">
              Connect Wallet
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
