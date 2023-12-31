import { Button, Divider, NavLink, Tooltip } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import {
  IconGauge,
  IconSettingsFilled,
  IconFingerprint,
  IconTrashFilled,
  IconMailOpenedFilled,
  IconActivity,
  IconChevronRight,
} from "@tabler/icons-react";
import NameComp from "./NameComp";
import { useSelector } from "react-redux";
import PhoneComp from "./PhoneComp";
import EmailComp from "./EmailComp";
import PhotoComp from "./PhotoComp";
import DobComp from "./DobComp";
import IncomeComp from "./IncomeComp";
import AccountSettings from "./AccountSettings";
import HideDelete from "./HideDelete";
import PartnerPreference from "@/components/registration/partner-preferences/PartnerPreference";
import { useSearchParams } from "next/navigation";
import EmailVerification from "./EmailVerification";

const data = [
  {
    icon: IconSettingsFilled,
    label: "Account Settings",
  },
  {
    icon: IconFingerprint,
    label: "Preferences",
    // tooltip: `Based on the settings other "\n" people can view my information.`
    tooltip:
      "Based on the \n" +
      "settings other\n" +
      "\n" +
      "people can view my information.",
  },
  //   {
  //     icon: IconFingerprint,
  //     label: "Email / SMS Alerts",
  //   },
  //   {
  //     icon: IconGauge,
  //     label: "Privacy Options",
  //     description: "All about your basic info",
  //   },
  {
    icon: IconTrashFilled,
    label: "Hide / Delete Profile",
  },
  { icon: IconMailOpenedFilled, label: "Email Verification" },
];

const Settings = () => {
  const { userInfo, message } = useSelector((state) => state.user);
  const [active, setActive] = useState(0);
  const [openHidden, setOpenHidden] = useState({});
  const search = useSearchParams();
  const queryParam = search.get("state");

  const {
    email = {},
    firstName = {},
    lastName = {},
    location: { city, residencyStatus } = {},
    doctrine: { caste, motherTongue } = {},
    appearance: { height } = {},
    education: { college, education } = {},
    family: { children, livingWith } = {},
    lifestyle: { diet, maritalStatus } = {},
    profession: { employer, income, occupation, workingWith } = {},
    trait: { aboutMe } = {},
    phone,
    bloodGroup,
  } = userInfo || {};

  const [profileData, setProfileData] = useState({
    firstName: firstName ? firstName : "",
    lastName: lastName ? lastName : "",
    phone: "",
    photo: "",
    email: email ? email : "",
  });

  const listItems = [
    {
      id: 1,
      label: "Display Name as",
      value: firstName + " " + lastName,
      hiddenComp: (
        <NameComp
          profileData={profileData}
          setProfileData={setProfileData}
        ></NameComp>
      ),
      hiddenCompVisible: false,
    },
    // {
    //     id: 2,
    //     label: 'Phone',
    //     value: 'Only Premium Members',
    //     hiddenComp: <PhoneComp profileData={profileData} setProfileData={setProfileData}></PhoneComp>
    // },
    // {
    //     id: 3,
    //     label: 'Email',
    //     value: 'Visible to all Premium Members',
    //     hiddenComp: <EmailComp profileData={profileData} setProfileData={setProfileData}></EmailComp>
    // },
    {
      id: 4,
      label: "Photo",
      value: "Visible to all Members",
      hiddenComp: (
        <PhotoComp
          profileData={profileData}
          setProfileData={setProfileData}
        ></PhotoComp>
      ),
    },
    {
      id: 5,
      label: "Date of Birth",
      value: "Show my full Date of Birth (mm/dd/yyyy)",
      hiddenComp: (
        <DobComp
          profileData={profileData}
          setProfileData={setProfileData}
        ></DobComp>
      ),
    },
    {
      id: 6,
      label: "Annual Income",
      value: "Visible to all Members",
      hiddenComp: (
        <IncomeComp
          profileData={profileData}
          setProfileData={setProfileData}
        ></IncomeComp>
      ),
    },
    {
      id: 7,
      label: "Visitors Setting",
      value: "Let other Members know that I have visited their Profile",
      hiddenComp: "Coming soon",
    },
    {
      id: 8,
      label: "Do not disturb",
      value: "Can call me for Premium Membership related offers.",
      hiddenComp: "Coming soon",
    },
    {
      id: 9,
      label: "Profile Privacy",
      value: "Visible to all, including unregistered visitors",
      hiddenComp: "Coming soon",
    },
    {
      id: 10,
      label: "Web Notifications",
      value: "Unsubscribed",
      hiddenComp: "Coming soon",
    },
  ];

  // const items = data.map((item, index) => (
  //   <Tooltip label="Test">

  //     <NavLink
  //       key={item.label}
  //       active={index === active}
  //       label={item.label}
  //       description={item.description}
  //       rightSection={item.rightSection}
  //       icon={<item.icon size="1rem" stroke={1.5} />}
  //       onClick={() => {
  //         setActive(index);
  //       }}
  //       color="pink"
  //       variant="filled"
  //       className="rounded-10"
  //     />
  //   </Tooltip>
  // ));

  const items = data.map((item, index) => (
    <div key={item.label}>
      {item.tooltip ? (
        <Tooltip
          multiline
          w={220}
          withArrow
          transitionProps={{ duration: 200 }}
          label={item.tooltip}
        >
          {generateNavLink(item, index)}
        </Tooltip>
      ) : (
        generateNavLink(item, index)
      )}
    </div>
  ));

  function generateNavLink(item, index) {
    return (
      <NavLink
        key={item.label}
        active={index === active}
        label={item.label}
        description={item.description}
        rightSection={item.rightSection}
        icon={<item.icon size="1rem" stroke={1.5} />}
        onClick={() => {
          setActive(index);
        }}
        color="pink"
        variant="filled"
        className="rounded-10"
      />
    );
  }

  const handleEdit = (id) => {
    setOpenHidden((prevItem) => ({
      ...prevItem,
      [id]: !prevItem[id],
    }));
  };

  useEffect(() => {
    if (queryParam) {
      setActive(parseInt(queryParam));
    }
  }, [queryParam]);

  return (
    <div className="settings container">
      <>
        {/* <div className="">
                    <h2 className="text-center mb-15">
                        Privacy Settings
                    </h2>
                </div> */}

        <div className="settings__wrapper">
          <div className="settings__wrapper--requestBox">
            <div className="menuBox-container">
              <div className="menus">{items}</div>
            </div>
          </div>
          <div className="settings__wrapper--contentBox">
            {active === 4 ? (
              <>
                {listItems?.map((item) => (
                  <>
                    <div className="privacy-items">
                      <div className="privacy-items-single">
                        <p className="left opacity-4">{item?.label}</p>
                        <div>
                          <p className="right">{item?.value}</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        {/* <Button onClick={() => handleEdit(item?.id)} variant="light" color="pink" size="xs" radius="xl">Edit</Button> */}
                        {openHidden[item?.id] ? (
                          <div className="flex flex-gap-5">
                            <Button
                              onClick={() => handleEdit(item?.id)}
                              variant="outline"
                              color="pink"
                              size="xs"
                              radius="xl"
                            >
                              Cancel
                            </Button>

                            <Button
                              onClick={() => handleEdit(item?.id)}
                              variant="filled"
                              size="xs"
                              radius="xl"
                            >
                              Save
                            </Button>
                          </div>
                        ) : (
                          <Button
                            onClick={() => handleEdit(item?.id)}
                            variant="light"
                            color="pink"
                            size="xs"
                            radius="xl"
                          >
                            Edit
                          </Button>
                        )}
                      </div>
                    </div>
                    {openHidden[item?.id] && (
                      <div
                        className={`hidden-component ${
                          openHidden[item.id] ? "open" : ""
                        }`}
                      >
                        {item.hiddenComp}
                      </div>
                    )}
                    <Divider my="sm" variant="dotted" />
                  </>
                ))}
              </>
            ) : active === 0 ? (
              <AccountSettings
                profileData={profileData}
                setProfileData={setProfileData}
              ></AccountSettings>
            ) : active === 1 ? (
              <>
                <div>
                  <h2 className="text-center">Update Preferences</h2>
                  <PartnerPreference header=""></PartnerPreference>
                </div>
              </>
            ) : active === 3 ? (
              <>
                <EmailVerification></EmailVerification>
              </>
            ) : active === 2 ? (
              <>
                <HideDelete></HideDelete>
              </>
            ) : active === 5 ? (
              <>Coming soon!</>
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default Settings;
