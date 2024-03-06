"use client";

import { useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import icon from "../../../../public/assets/arrow-accordion.png";

const removeUnwantedElement = () => {
  useEffect(() => {
    // Busca todos los elementos con la clase específica
    const unwantedElements = document.querySelectorAll(".text-default-400");

    // Itera sobre la NodeList y oculta cada elemento
    unwantedElements.forEach((element) => {
      element.style.display = "none";
    });
  }, []);
};

export default function Services() {
  // Llama a la función para eliminar el elemento no deseado
  removeUnwantedElement();

  return (
    <div className="bg-[#0d0e13]  py-10 lg:pt-16 lg:pb-28">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-24 flex flex-col space-y-20">
        <div className="border-b border-white pb-2">
          <span
            style={{ fontFamily: "Switzer-Regular", fontWeight: "600" }}
            className="text-lg tracking-[-0.3px] lg:text-2xl lg:tracking-[-0.4px] text-white"
          >
            Our Services
          </span>
        </div>
        <Accordion className="text-white">
          <AccordionItem
            className="border-b border-[#9c9b9b] pb-4"
            key="1"
            aria-label="Accordion 1"
            title={
              <div className="flex justify-between items-end">
                <span
                  style={{
                    fontFamily: "Switzer-Regular",
                    fontWeight: "600",
                  }}
                  className="text-[#9c9b9b] text-sm leading-[18px] tracking-[-0.23px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px]"
                >
                  01.
                </span>
                <span
                  style={{
                    fontFamily: "Switzer-Regular",
                    fontWeight: "300",
                  }}
                  className="text-white text-[2rem] tracking-[-1.27px] lg:text-8xl lg:tracking-[-3.8px] text-center"
                >
                  Strategy
                </span>
                {/* Reemplaza la ruta de src con la ruta de tu nueva imagen local */}
                <Image className="w-5 lg:w-11" src={icon} alt="Nuevo ícono" />
              </div>
            }
          >
            <div
              className="text-sm lg:text-lg"
              style={{
                fontFamily: "Switzer-Regular",
                fontWeight: "500",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eos nulla repellat sint itaque, consectetur pariatur quibusdam ex
              fuga accusamus blanditiis animi eius odit autem, mollitia
              assumenda architecto quisquam vero? Enim officia quibusdam itaque
              delectus culpa corrupti fugit at ab repellat eligendi debitis ut,
              cupiditate expedita rem exercitationem dolor illum? Adipisci velit
              placeat doloremque suscipit officia ipsam tempora provident earum!
              Voluptate, voluptates soluta sapiente amet rerum totam tenetur
              nesciunt? Nobis error aut voluptas asperiores a accusamus, vel in
              quaerat eum, deserunt iste repudiandae optio alias aperiam, cumque
              harum quis excepturi! Quo recusandae eligendi deserunt, repellat
              sit cum repellendus nesciunt sapiente? Maiores optio quam porro
              error ullam officia voluptate tempore molestias, voluptatem vel
              nulla consequuntur! Quas libero repellendus error magni impedit.
              Nemo, distinctio facere. Doloremque minima fugit natus
              consequuntur quaerat ab explicabo eos, facere debitis nulla at
              reprehenderit et voluptatum, vero, deleniti ipsa accusamus
              commodi? Facilis quo asperiores beatae excepturi dignissimos.
            </div>
          </AccordionItem>
          <AccordionItem
            className="border-b border-[#9c9b9b] pb-4"
            key="2"
            aria-label="Accordion 2"
            title={
              <div className="flex justify-between items-end">
                <span
                  style={{
                    fontFamily: "Switzer-Regular",
                    fontWeight: "600",
                  }}
                  className="text-[#9c9b9b] text-sm leading-[18px] tracking-[-0.23px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px]"
                >
                  02.
                </span>
                <span
                  style={{
                    fontFamily: "Switzer-Regular",
                    fontWeight: "300",
                  }}
                  className="text-white text-[2rem] tracking-[-1.27px] lg:text-8xl lg:tracking-[-3.8px] text-center"
                >
                  Diseño UX/UI
                </span>
                {/* Reemplaza la ruta de src con la ruta de tu nueva imagen local */}
                <Image className="w-5 lg:w-11" src={icon} alt="Nuevo ícono" />
              </div>
            }
          >
            <div
              className="text-sm lg:text-lg"
              style={{
                fontFamily: "Switzer-Regular",
                fontWeight: "500",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eos nulla repellat sint itaque, consectetur pariatur quibusdam ex
              fuga accusamus blanditiis animi eius odit autem, mollitia
              assumenda architecto quisquam vero? Enim officia quibusdam itaque
              delectus culpa corrupti fugit at ab repellat eligendi debitis ut,
              cupiditate expedita rem exercitationem dolor illum? Adipisci velit
              placeat doloremque suscipit officia ipsam tempora provident earum!
              Voluptate, voluptates soluta sapiente amet rerum totam tenetur
              nesciunt? Nobis error aut voluptas asperiores a accusamus, vel in
              quaerat eum, deserunt iste repudiandae optio alias aperiam, cumque
              harum quis excepturi! Quo recusandae eligendi deserunt, repellat
              sit cum repellendus nesciunt sapiente? Maiores optio quam porro
              error ullam officia voluptate tempore molestias, voluptatem vel
              nulla consequuntur! Quas libero repellendus error magni impedit.
              Nemo, distinctio facere. Doloremque minima fugit natus
              consequuntur quaerat ab explicabo eos, facere debitis nulla at
              reprehenderit et voluptatum, vero, deleniti ipsa accusamus
              commodi? Facilis quo asperiores beatae excepturi dignissimos.
            </div>
          </AccordionItem>
          <AccordionItem
            className="border-b border-[#9c9b9b] pb-4"
            key="3"
            aria-label="Accordion 3"
            title={
              <div className="flex justify-between items-end">
                <span
                  style={{
                    fontFamily: "Switzer-Regular",
                    fontWeight: "600",
                  }}
                  className="text-[#9c9b9b] text-sm leading-[18px] tracking-[-0.23px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px]"
                >
                  03.
                </span>
                <span
                  style={{
                    fontFamily: "Switzer-Regular",
                    fontWeight: "300",
                  }}
                  className="text-white text-[2rem] tracking-[-1.27px] lg:text-8xl lg:tracking-[-3.8px] text-center"
                >
                  Development
                </span>
                {/* Reemplaza la ruta de src con la ruta de tu nueva imagen local */}
                <Image className="w-5 lg:w-11" src={icon} alt="Nuevo ícono" />
              </div>
            }
          >
            <div
              className="text-sm lg:text-lg"
              style={{
                fontFamily: "Switzer-Regular",
                fontWeight: "500",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eos nulla repellat sint itaque, consectetur pariatur quibusdam ex
              fuga accusamus blanditiis animi eius odit autem, mollitia
              assumenda architecto quisquam vero? Enim officia quibusdam itaque
              delectus culpa corrupti fugit at ab repellat eligendi debitis ut,
              cupiditate expedita rem exercitationem dolor illum? Adipisci velit
              placeat doloremque suscipit officia ipsam tempora provident earum!
              Voluptate, voluptates soluta sapiente amet rerum totam tenetur
              nesciunt? Nobis error aut voluptas asperiores a accusamus, vel in
              quaerat eum, deserunt iste repudiandae optio alias aperiam, cumque
              harum quis excepturi! Quo recusandae eligendi deserunt, repellat
              sit cum repellendus nesciunt sapiente? Maiores optio quam porro
              error ullam officia voluptate tempore molestias, voluptatem vel
              nulla consequuntur! Quas libero repellendus error magni impedit.
              Nemo, distinctio facere. Doloremque minima fugit natus
              consequuntur quaerat ab explicabo eos, facere debitis nulla at
              reprehenderit et voluptatum, vero, deleniti ipsa accusamus
              commodi? Facilis quo asperiores beatae excepturi dignissimos.
            </div>
          </AccordionItem>
          <AccordionItem
            className="border-b border-[#9c9b9b] pb-4"
            key="4"
            aria-label="Accordion 4"
            title={
              <div className="flex justify-between items-end">
                <span
                  style={{
                    fontFamily: "Switzer-Regular",
                    fontWeight: "600",
                  }}
                  className="text-[#9c9b9b] text-sm leading-[18px] tracking-[-0.23px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.4px]"
                >
                  04.
                </span>
                <span
                  style={{
                    fontFamily: "Switzer-Regular",
                    fontWeight: "300",
                  }}
                  className="text-white text-[2rem] tracking-[-1.27px] lg:text-8xl lg:tracking-[-3.8px] text-center"
                >
                  Technical support
                </span>
                {/* Reemplaza la ruta de src con la ruta de tu nueva imagen local */}
                <Image className="w-5 lg:w-11" src={icon} alt="Nuevo ícono" />
              </div>
            }
          >
            <div
              className="text-sm lg:text-lg"
              style={{
                fontFamily: "Switzer-Regular",
                fontWeight: "500",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              eos nulla repellat sint itaque, consectetur pariatur quibusdam ex
              fuga accusamus blanditiis animi eius odit autem, mollitia
              assumenda architecto quisquam vero? Enim officia quibusdam itaque
              delectus culpa corrupti fugit at ab repellat eligendi debitis ut,
              cupiditate expedita rem exercitationem dolor illum? Adipisci velit
              placeat doloremque suscipit officia ipsam tempora provident earum!
              Voluptate, voluptates soluta sapiente amet rerum totam tenetur
              nesciunt? Nobis error aut voluptas asperiores a accusamus, vel in
              quaerat eum, deserunt iste repudiandae optio alias aperiam, cumque
              harum quis excepturi! Quo recusandae eligendi deserunt, repellat
              sit cum repellendus nesciunt sapiente? Maiores optio quam porro
              error ullam officia voluptate tempore molestias, voluptatem vel
              nulla consequuntur! Quas libero repellendus error magni impedit.
              Nemo, distinctio facere. Doloremque minima fugit natus
              consequuntur quaerat ab explicabo eos, facere debitis nulla at
              reprehenderit et voluptatum, vero, deleniti ipsa accusamus
              commodi? Facilis quo asperiores beatae excepturi dignissimos.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
