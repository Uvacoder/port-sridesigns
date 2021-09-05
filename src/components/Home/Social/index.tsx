import HomeSocialLinks from "./links";

export default function HomeSocial() {
  return (
    <div className="max-w-screen-sm lg:max-w-screen-lg lg:grid grid-cols-3 gap-12 py-6 mx-6 lg:mx-auto space-y-6 lg:space-y-0">
      <p className="text-lg font-bold text-gray-900">Find me across the internet </p>
      <div className="col-span-2">
        <HomeSocialLinks />
      </div>
    </div>
  )
}