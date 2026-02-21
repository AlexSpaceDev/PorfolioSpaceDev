import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.DiEladB3.js";import{r as m}from"./index.UCiZe19v.js";var u=m();function h(){const[t,i]=r.useState(!1),[o,l]=r.useState(!1),[c,n]=r.useState(null);r.useEffect(()=>{l(!0)},[]),r.useEffect(()=>{document.body.style.overflow=t?"hidden":""},[t]);const s=()=>i(!t),d=[{id:"manifiesto",label:"Manifiesto"},{id:"servicios",label:"Servicios"},{id:"archivos",label:"Archivos"},{id:"tripulacion",label:"Tripulación"},{id:"faq",label:"FAQ"}];return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:s,className:"md:hidden relative z-[70] group","aria-label":"Abrir menú",children:e.jsx("div",{className:`relative flex items-center justify-center w-10 h-10 
          rounded-full transition-all duration-300
          ${t?"ring-4 ring-primary/40":"hover:ring-4 hover:ring-primary/20"}
          `,children:e.jsxs("div",{className:`flex flex-col justify-around items-center w-5 h-5 transform
            transition-all duration-300 origin-center overflow-hidden
            ${t?"-translate-x-0.5 rotate-180":""}
            `,children:[e.jsx("span",{className:`h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
              ${t?"rotate-45 w-10/12":""}
              `}),e.jsx("span",{className:`h-[2px] w-5 bg-white transform transition-all duration-300
              ${t?"translate-x-10 opacity-0":""}
              `}),e.jsx("span",{className:`h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
              ${t?"-rotate-45 w-10/12":""}
              `})]})})}),o&&u.createPortal(e.jsxs("div",{className:`fixed inset-0 z-[999] transition-opacity duration-300 ${t?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,children:[e.jsx("div",{onClick:()=>i(!1),className:"absolute inset-0 bg-black/40 backdrop-blur-md"}),e.jsx("aside",{className:`fixed top-0 right-0 bottom-0 w-64
              bg-background-dark/95
              border-l border-primary/20
              shadow-[0_0_60px_rgba(57,129,191,0.25)]
              transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${t?"translate-x-0":"translate-x-full"}
              `,children:e.jsx("nav",{className:"flex flex-col h-full p-5 text-lg font-medium",children:e.jsxs("div",{className:"mt-20 flex flex-col gap-3",children:[d.map(a=>e.jsx("a",{href:`#${a.id}`,onClick:()=>{n(a.id),i(!1)},className:`
                        relative px-4 py-3 rounded-lg
                        transition-all duration-300
                        ${c===a.id?"bg-primary/15 text-primary shadow-[0_0_20px_rgba(0,225,255,0.15)]":"hover:bg-white/5 hover:text-primary"}
                      `,children:a.label},a.id)),e.jsx("a",{href:"#contacto",onClick:()=>{n("contacto"),i(!1)},className:"mt-4 bg-primary text-background-dark px-0 py-3 rounded-lg font-bold text-center hover:scale-[1.02] transition-all duration-300",children:"Contáctanos"})]})})}),e.jsx("button",{onClick:s,className:`md:hidden fixed top-6 transition-all duration-300 z-[1000] group
                ${t?"right-[19rem]":"right-6"}
                `,"aria-label":"Abrir menú",children:e.jsx("div",{className:`relative flex items-center justify-center w-10 h-10 
                rounded-full transition-all duration-300
                ${t?"ring-4 ring-primary/40":"hover:ring-4 hover:ring-primary/20"}
                `,children:e.jsxs("div",{className:`flex flex-col justify-around items-center w-5 h-5 transform
                  transition-all duration-300 origin-center overflow-hidden
                  ${t?"-translate-x-0.5 rotate-180":""}
                  `,children:[e.jsx("span",{className:`h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
                    ${t?"rotate-45 w-10/12":""}
                    `}),e.jsx("span",{className:`h-[2px] w-5 bg-white transform transition-all duration-300
                    ${t?"translate-x-10 opacity-0":""}
                    `}),e.jsx("span",{className:`h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
                    ${t?"-rotate-45 w-10/12":""}
                    `})]})})})]}),document.body)]})}export{h as default};
