import Image from "next/image";
import PwdForm from "@/components/forms/pwd-form";
import UserMainWrapper from "@/components/wrappers/user-main-wrapper";

const page = () => {
  return (
    <UserMainWrapper>
      <PwdForm />
      <div className="relative w-full h-full lg:block hidden">
        <Image
          src="/_static/bg1.png"
          alt="bg1"
          fill
          className="object-center"
        />
      </div>
    </UserMainWrapper>
  );
};

export default page;