import { btnBackground } from "@/styles/library/mantine";
import { Avatar, Button, Divider } from "@mantine/core";

const imageUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

const profileImg = [
    {
        id: 1,
        name: 'Rudina Ahmed',
        height: "5'6''",
        age: '22yrs',
        community: 'Bengali',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    {
        id: 2,
        name: 'John Doe',
        height: "5'10''",
        age: '30yrs',
        community: 'American',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    {
        id: 3,
        name: 'Alice Smith',
        height: "5'8''",
        age: '25yrs',
        community: 'English',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    {
        id: 4,
        name: 'Mohammed Ali',
        height: "6'0''",
        age: '28yrs',
        community: 'Arabic',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    {
        id: 5,
        name: 'Linda Johnson',
        height: "5'5''",
        age: '35yrs',
        community: 'Canadian',
        profileImage: {
            isVisible: true,
            url: imageUrl,
        },
    },
    // {
    //     id: 6,
    //     name: 'Juan Rodriguez',
    //     height: "5'7''",
    //     age: '27yrs',
    //     community: 'Mexican',
    //     profileImage: {
    //         isVisible: true,
    //         url: imageUrl,
    //     },
    // },
];

const MyDashboardBottom = () => {
    return (
        <div className='myDashboard__bottom mt-20'>
            <h3 className="mb-5">Recent Visitors</h3>
            <div className="myDashboard__bottom--profileContainerRoot">
                <div className="myDashboard__bottom--profileContainer">
                    {
                        profileImg?.map(profile => <div className="single container-box-bg py-15">
                            <Avatar
                                size="xl"
                                radius="xl"
                                src={profile?.profileImage?.url}
                                alt="it's me"
                            />
                            <div className="mt-10">
                                <h3>{profile?.name}</h3>
                                <p>{profile?.age}{" "}{profile?.height}{" "}{profile?.community}</p>
                            </div>
                            <Button
                                size="xs"
                                radius="xl"
                                // leftIcon={<IconArrowNarrowLeft />}
                                style={btnBackground} type="button"
                                className={`button mt-10`}
                            >
                                Connect Now
                            </Button>
                        </div>)
                    }
                </div>

                <div className="myDashboard__bottom--noti container-box-bg mx-10 p-15">
                    <div className="flex flex-wrap justify-between align-center flex-gap-10">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>

                    </div>

                    <Divider my={5}></Divider>


                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>

                    </div>

                    <Divider my={5}></Divider>

                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>

                    </div>
                    <Divider my={5}></Divider>

                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>
                    </div>
                    <Divider my={5}></Divider>

                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>
                    </div>
                    <Divider my={5}></Divider>


                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>
                    </div>
                    <Divider my={5}></Divider>

                    <div className="flex flex-wrap justify-between align-center flex-gap-5 mt-15">
                        <Avatar
                            size="md"
                            radius="md"
                            src={imageUrl}
                            alt="Noti Profile"
                        />
                        <p className="small-text">Syeda added a photo to her profile</p>
                    </div>
                    <Divider my={5}></Divider>
                </div>
            </div>
        </div>
    )
}

export default MyDashboardBottom