<div
  className="transition-all duration-1000 p-8 rounded-xl shadow-lg"
  style={{
    background: "linear-gradient(to bottom right, rgb(30, 30, 30), rgb(45, 45, 45), rgb(10, 10, 10))"
  }}
>
  {/* Content Wrapper */}
  <div
    className={`transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    {/* Example Content */}
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-green-400 text-sm font-semibold">
          Available for Work
        </span>
      </div>
      <div className="flex items-center gap-1 text-yellow-400">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">Pakistan</span>
      </div>
    </div>

    <h5 className="text-2xl lg:text-5xl font-bold text-white leading-tight mb-4">
      Hello, I'm <br />
      <span className="text-white">Zarsham Waleed</span>
    </h5>

    <div className="text-2xl lg:text-3xl text-slate-300 mb-6 min-h-[2.5rem]">
      <span className="inline-block">
        {roles[currentRole]}
        <span className="animate-pulse"></span>
      </span>
    </div>
  </div>
</div>
