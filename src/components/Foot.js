export default function Foot() {
  return (
    <>
      <div id="foot" className=""></div>
      <div className="relative flex justify-center">
        <img className="absolute" src={require(`assets/images/b3.png`)} alt="contact" />
        <img className="absolute -bottom-5 w-full sm:-bottom-10" src={require(`assets/images/nuocden.png`)} alt="nuocden" />
        <img className="absolute w-1/2" src={require(`assets/images/chufoot.png`)} alt="chufoot" />
      </div>
    </>
  )
}
