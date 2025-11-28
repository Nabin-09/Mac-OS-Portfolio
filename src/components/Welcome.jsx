import { useRef } from "react"

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  return <section id="welcome">
    <p ref={subtitleRef}>Hey , I am Nabin! Welcome to my</p>
    <h1 ref={titleRef} className="mt - 7">Portfolio</h1>
  </section>
}

export default Welcome
