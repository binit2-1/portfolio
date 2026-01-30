import * as SvgLogo from "@/components/svgs/logos";

export const StackHeading = () => {
  return (
    <div className="w-full h-full flex justify-start items-end">
      <h1 className="text-6xl -ml-px">stack.</h1>
    </div>
  );
};

export const StackLogos = () => {
  return (
    <div className="relative flex w-full h-full">
      <div className="box4 absolute  h-full w-37.5">
        <div className="absolute flex items-end justify-end mt-1.5 w-full h-full ">
          <p className="text-4xl">Logo</p>
        </div>
      </div>
      <div className="box1 absolute left-41 h-full w-37.5">
        <div className="absolute flex justify-start w-full h-full ">
          <SvgLogo.React height={50} />
        </div>
        <div className="absolute flex justify-end -mt-2.5 w-full h-full ">
          <SvgLogo.Tailwind height={50} />
        </div>
        <div className="absolute flex items-end justify-start w-full h-full">
          <SvgLogo.Next height={50} />
        </div>
        <div className="absolute flex items-end ml-1 justify-end w-full h-full">
          <SvgLogo.Node height={50} />
        </div>
      </div>
      <div className="box2 absolute left-82 h-full w-37.5">
        <div className="absolute flex justify-start w-full h-full ">
          <SvgLogo.Postgre height={50} />
        </div>
        <div className="absolute flex justify-end w-full h-full ">
          <SvgLogo.GhActions height={50} />
        </div>
        <div className="absolute flex items-end justify-start mt-1.5 w-full h-full">
          <SvgLogo.Playwright height={50} />
        </div>
        <div className="absolute flex items-end justify-end mt-2.5 w-full h-full">
          <SvgLogo.Express height={50} />
        </div>
      </div>
      <div className="box3 absolute left-123 h-full w-37.5">
        <div className="absolute flex justify-start w-full h-full ">
          <SvgLogo.Ts height={50} />
        </div>
        <div className="absolute flex justify-end w-full h-full ">
          <SvgLogo.Git height={50} />
        </div>
        <div className="absolute flex items-end justify-start  w-full h-full">
          <SvgLogo.Docker height={50} />
        </div>
        <div className="absolute flex items-end justify-end  w-full h-full">
          <SvgLogo.Github height={50} />
        </div>
      </div>
    </div>
  );
};
