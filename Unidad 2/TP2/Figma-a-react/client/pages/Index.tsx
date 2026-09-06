export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
      <div className="w-full max-w-[685px] overflow-hidden rounded-lg bg-[#FAFAFA] flex flex-col sm:flex-row">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4e47a8c2a6e5c0b4dc2efc5d736a1a7a2bda8dfe?width=685"
          alt="Team library components"
          className="w-full sm:w-1/2 h-auto sm:h-[492px] object-cover"
        />
        <div className="flex flex-1 flex-col justify-center gap-6 px-6 py-10 sm:px-8">
          <h1 className="text-[32px] sm:text-[38px] font-bold leading-[115%] tracking-[-0.722px] text-black">
            Build your own team library
          </h1>
          <p className="text-sm leading-6 tracking-[-0.084px] text-black/80">
            Don&rsquo;t reinvent the wheel with every design. Team libraries
            let you share styles and components across files, with everyone
            on your team.
          </p>
        </div>
      </div>
    </div>
  );
}
