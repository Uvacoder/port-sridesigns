import HomeSocialLinks from "./links";

export default function HomeSocial() {
  return (
    <div className="max-w-screen-sm lg:max-w-3xl grid grid-cols-2 gap-32 py-6">
      <p className="text-lg font-bold text-white">Find me across the internet:</p>
      <div>
        <HomeSocialLinks />
      </div>
    </div>
  )
}