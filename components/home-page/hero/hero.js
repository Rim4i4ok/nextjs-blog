import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.png"
          alt="An image showing Rim"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, I am Rim</h1>
      <p>
        Duis sint incididunt minim amet laboris et reprehenderit. Sunt nisi
        culpa occaecat sunt non ullamco tempor. Culpa cillum enim exercitation
        laborum exercitation occaecat enim irure duis. Ullamco proident veniam
        labore Lorem voluptate in non. Amet quis nostrud laborum sint voluptate
        sit in reprehenderit. Cillum tempor non aliqua dolore veniam quis sunt
        minim occaecat.
      </p>
    </section>
  );
}

export default Hero;
