"use client";

import { Avatar, Button, Tooltip } from "@mantine/core";
import CenteredModal from "../global/CenteredModal";
import { FormProvider } from "@/context/FormContext";
import Form from "../multiStepRegistration/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import useAxios from "@/hooks/axios/useAxios";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { imageUrl, imageUrlFemale } from "@/staticData/image";
import { DisableRightClick } from "@/utils/DisableRightClick";
import { btnBackground } from "@/styles/library/mantine";
import Link from "next/link";

const brides = [
  {
    id: 1,
    image: "landing/brides/bride1.png",
    name: "Ashlyn Carder",
    years: "24 years",
    tall: "5ft 5 in",
  },
  {
    id: 2,
    image: "landing/brides/bride2.png",
    name: "Ashlyn Carder",
    years: "24 years",
    tall: "5ft 5 in",
  },
  {
    id: 3,
    image: "landing/brides/bride5.png",
    name: "Ashlyn Carder",
    years: "24 years",
    tall: "5ft 5 in",
  },
  {
    id: 4,
    image: "landing/brides/bride4.png",
    name: "Ashlyn Carder",
    years: "24 years",
    tall: "5ft 5 in",
  },
  {
    id: 5,
    image: "landing/brides/bride5.png",
    name: "Ashlyn Carder",
    years: "24 years",
    tall: "5ft 5 in",
  },
];

const BrideGroom = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { data, error, loading, refetch } = useAxios("user/public-profile");
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => setModalOpen(false);

  const handleRegister = () => {
    if (!isAuthenticated) {
      setModalOpen(true);
    } else {
      router.push("/my-matches");
    }
  };

  const handleRedirect = () => {
    router.push("/login");
  };

  return (
    <>
      {data?.data?.length > 0 ? (
        <div className="bridegroom">
          <h1 className="text-center">Match Bride & Groom For You</h1>
          <div className="container bridegroom__wrapper">
            {data?.data?.map((item, i) => (
              <div
                className="container-box-bg bridegroom__wrapper--container py-30 text-center"
                key={i}
              >
                <div className="info">
                  <Avatar
                    onContextMenu={(e) => DisableRightClick(e)}
                    sx={{
                      objectFit: "contain",
                      borderRadius: "50%",
                      height: "100px",
                      width: "100px",
                    }}
                    mx="auto"
                    size="xl"
                    src={item?.profilePicture?.url?.medium || imageUrl}
                    alt={item?.name}
                  />
                  <h3 className="mt-5">
                    {item?.firstName + " " + item?.lastName}
                  </h3>
                  <p>
                    {item?.dateOfBirth
                      ? `${calculateAge(item?.dateOfBirth)} years`
                      : "18 years"}
                  </p>
                  <p>
                    {heightCalculator(item?.appearance?.height) || `5' 10"`}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Tooltip
                    label={"Click to View Profile"}
                    color="pink"
                    withArrow
                    position="top"
                  >
                    {/* <Link href="/login"> */}
                    <Button
                      sx={{ backgroundColor: "#770DD5", color: "white" }}
                      color="pink"
                      variant="white"
                      className="mt-10 view-btn"
                      radius="lg"
                      onClick={handleRedirect}
                    >
                      View Profile
                    </Button>
                    {/* </Link> */}
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center py-30">
            <Button
              sx={{ width: "180px" }}
              // color="pink"
              className="mt-10"
              style={btnBackground}
              size="md"
              onClick={handleRegister}
            >
              {!isAuthenticated ? "Register Now" : "Let's Begin"}
            </Button>
          </div>
          {modalOpen && (
            <CenteredModal
              modalOpen={modalOpen}
              handleModalClose={handleModalClose}
              modalTitle={
                <h3 className="text-center">Let's Create an Account!</h3>
              }
            >
              {/* <MultistepRegistration></MultistepRegistration> */}
              <FormProvider>
                <Form handleModalClose={handleModalClose}></Form>
              </FormProvider>
            </CenteredModal>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BrideGroom;
