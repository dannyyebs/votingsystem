// import Link from "next/link";
// import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
//   CardFooter,
} from "./ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const CandidateCard = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* CHAIRPERSON */}
      <Card>
        <CardHeader>
          <CardTitle className="font-extrabold uppercase opacity-50">
            Chairperson
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="/Rcandidates/revdrherbertkkgraham.jpg"
              alt="Picture of the author"
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-xl bg-gray-30 shadow-xl"
            />

            <h3 className="uppercase font-extrabold text-xl">
              Rev. Dr. Herbert K.K Graham
            </h3>
          </div>
          <Separator className="" />
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="/Rcandidates/ebenezer_domey.jpg"
              alt="Picture of the author"
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-xl bg-gray-30 shadow-xl"
            />

            <h3 className="uppercase font-extrabold text-xl">Ebenezer Domey</h3>
          </div>
        </CardContent>
      </Card>
      {/* VICE CHAIRPERSON */}
      <Card>
        <CardHeader>
          <CardTitle className="font-extrabold uppercase opacity-50">
            vice Chairperson
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="/Rcandidates/emmanuel_mendel_dwamena.jpg"
              alt="Picture of the author"
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-xl bg-gray-30 shadow-xl"
            />
            <h3 className="uppercase font-extrabold text-xl">
              EMMANUEL MENDEL DWAMENA
            </h3>
          </div>
        </CardContent>
      </Card>

       {/* EXECUTIVE MEMBER */}
       <Card>
        <CardHeader>
          <CardTitle className="font-extrabold uppercase opacity-50">
          EXECUTIVE MEMBER
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="/Rcandidates/elfreda_ankai_taylor.jpg"
              alt="Picture of the author"
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-xl bg-gray-30 shadow-xl"
            />
            <h3 className="uppercase font-extrabold text-xl">
              ELFREDA ANKAI TAYLOR
            </h3>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="/Rcandidates/christiankwamearthursarfo.jpg"
              alt="Picture of the author"
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-xl bg-gray-30 shadow-xl"
            />
            <h3 className="uppercase font-extrabold text-xl">
            CHRISTIAN KWAME ARTHUR-SARFO

            </h3>
          </div>
          
        </CardContent>
      </Card>
       {/* TREASURER */}
       <Card>
        <CardHeader>
          <CardTitle className="font-extrabold uppercase opacity-50">
          TREASURER
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="/Rcandidates/martin_nketsiah_koomson.jpg"
              alt="Picture of the author"
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-xl bg-gray-30 shadow-xl"
            />
            <h3 className="uppercase font-bold text-xl">
              MARTIN NKETSIAH KOOMSON
            </h3>
          </div>
        </CardContent>
      </Card>

       {/* FINANCIAL SECRETARY */}
       <Card>
        <CardHeader>
          <CardTitle className="font-extrabold uppercase opacity-50">
          FINANCIAL SECRETARY
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-row gap-5 items-center">
            <Image
              src="/Rcandidates/emmanuel_k_m_baah.jpg"
              alt="EMMANUEL K. M. BAAH"
              width={70}
              height={70}
              objectFit="cover"
              className="rounded-xl bg-gray-30 shadow-xl"
            />
            <h3 className="uppercase font-bold text-xl">
              EMMANUEL K. M. BAAH
            </h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidateCard;
