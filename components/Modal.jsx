import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Modal() {
  return (
    <div>
      <section>
        <div className="text-center p-10">
          <h2 className="text-5xl text-teal-500 font-medium">
            Pahreza Iqbal Prastowo
          </h2>
          <h3 className="text-2xl py-2">Front End Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            sed, voluptatibus aliquid obcaecati excepturi iste labore. Fugiat
            facere atque error. Odit alias est quasi quidem animi natus omnis
            amet ullam.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
          <AiFillGithub />
          <AiFillInstagram />
          <AiFillLinkedin />
        </div>
        <div className="relative mt-5 mx-auto flex justify-center">
          <img src="/me.png" className="rounded-full w-80 h-80" />
        </div>
      </section>
      <section>
        <div className="text-center p-10">
          <h3 className="text-3xl py-1">Services i offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            voluptatem dolor aliquid velit mollitia repudiandae molestias
            aperiam quas tenetur quaerat?
          </p>
        </div>
      </section>
    </div>
  );
}
