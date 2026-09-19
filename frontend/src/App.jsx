function App() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          System Online
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          ResQ Intelligence
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          AI-Powered Disaster Intelligence Platform
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-slate-500">DATABASE</p>
            <p className="mt-1 text-sm text-emerald-400">
              MongoDB
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-slate-500">API</p>
            <p className="mt-1 text-sm text-emerald-400">
              Online
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-slate-500">AI</p>
            <p className="mt-1 text-sm text-yellow-400">
              Preparing
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;