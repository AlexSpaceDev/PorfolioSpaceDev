import { useState } from "react";

export default function ContactForm() {
  const [missionType, setMissionType] = useState("web");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/_actions/submitContact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error en envío");

      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-panel rounded-2xl relative overflow-hidden">
        <div className="scanline"></div>

        <div className="p-16 text-center space-y-4">
          <span   
            className="material-symbols-outlined text-primary drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            style={{ fontSize: "4.5rem" }}>
            check_circle
          </span>

          <h3 className="text-lg font-bold uppercase tracking-[0.3em] text-primary">
            Misión recibida
          </h3>

          <p className="text-base uppercase tracking-widest text-white/60">
            La transmisión fue exitosa. Pronto nos pondremos en contacto.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="glass-panel rounded-2xl relative overflow-hidden">
        <div className="scanline"></div>

        <div className="p-8 md:p-10 space-y-16">
          {/* ===================== SECCIÓN 01 ===================== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="size-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[9px] opacity-40 border border-primary/20">
                01
              </span>
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                Identidad del Nuevo Comandante
              </h3>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div className="group relative">
                <label className="block text-xs uppercase tracking-widest text-white/60 mb-4 group-focus-within:text-primary transition-colors">
                  Nombre del Explorador
                </label>
                <div className="glow-input bg-white/5 rounded-lg flex items-center px-4">
                  <span className="material-symbols-outlined text-white/20 text-xs mr-3">
                    person
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre completo"
                    className="w-full bg-transparent border-none py-3 px-0 focus:ring-0 text-white font-light placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group relative">
                <label className="block text-xs uppercase tracking-widest text-white/60 mb-4 group-focus-within:text-primary transition-colors">
                  Frecuencia de Enlace (Email)
                </label>
                <div className="glow-input bg-white/5 rounded-lg flex items-center px-4">
                  <span className="material-symbols-outlined text-white/20 text-xs mr-3">
                    alternate_email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="comandante@nave.space"
                    className="w-full bg-transparent border-none py-3 px-0 focus:ring-0 text-white font-light placeholder:text-white/30"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ===================== SECCIÓN 02 ===================== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="size-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[9px] opacity-40 border border-primary/20">
                02
              </span>
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                Selección de Tipo de Misión
              </h3>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { id: "web", label: "Desarrollo Web", icon: "language" },
                { id: "gaming", label: "Gaming", icon: "videogame_asset" },
                { id: "apps", label: "Mobile Apps", icon: "vibration" },
                { id: "arvr", label: "AR / VR", icon: "view_in_ar" },
                { id: "other", label: "Otros", icon: "settings_suggest" },
              ].map((mission) => (
                <label key={mission.id} className="cursor-pointer group">
                  <input
                    type="radio"
                    name="mission_type"
                    value={mission.id}
                    checked={missionType === mission.id}
                    onChange={() => setMissionType(mission.id)}
                    required
                    className="hidden"
                  />

                  <div
                    className={`mission-type-card flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all text-center h-full ${
                      missionType === mission.id
                        ? "border-primary bg-primary/10"
                        : "border-white/10 bg-white/5 hover:border-primary/50"
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl text-white/40 group-hover:text-primary">
                      {mission.icon}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/80">
                      {mission.label}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* ===================== SECCIÓN 03 ===================== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="size-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[9px] opacity-40 border border-primary/20">
                03
              </span>
              <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                Objetivos de la Misión
              </h3>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                required
                placeholder="Describe tu proyecto, objetivos y cualquier detalle"
                className="w-full bg-white/5 glow-border-primary rounded-xl p-5 text-white font-light leading-relaxed placeholder:text-white/30 text-base h-32"
              />

              {/* Terminal de Entrada de Datos */}
              <div className="absolute -top-3 right-6 bg-background-dark border border-primary/50 px-3 py-1 rounded-full flex items-center gap-2">
                <span className="size-1.5 bg-primary animate-pulse rounded-full"></span>
                <span className="text-[9px] uppercase tracking-widest text-primary font-bold">
                  Terminal de Entrada de Datos
                </span>
              </div>
            </div>
          </section>

          {/* ===================== ENVÍO ===================== */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative flex flex-col items-center gap-3 transition-transform hover:scale-10 disabled:opacity-50"
            >
              <div className="relative h-14 flex items-center justify-center overflow-hidden rounded-xl bg-primary text-background-dark font-black uppercase tracking-[0.4em] glow-cyan px-10">
                <span className="relative z-10 flex items-center gap-1">
                  {status === "sending" ? "Transmitiendo…" : "Lanzar Misión"}
                  <span className="material-symbols-outlined">rocket_launch</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#a5f3fc] to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Confirmar secuencia de transmisión
              </p>
            </button>
          </div>
        </div>
      </div>
    </form>
      
  );
}
