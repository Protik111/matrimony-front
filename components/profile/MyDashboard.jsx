import { Anchor, Badge, Button, Divider } from '@mantine/core'
import React from 'react'
import ThemeIconComp from '../global/ThemeIconComp'
import { IconCheck, IconLock, IconX } from '@tabler/icons-react'
import { btnBackground } from '@/styles/library/mantine'
import MyDashboardBottom from './MyDashboardBottom'
import { useSelector } from 'react-redux'
import { imageUrl } from '@/staticData/image'
import { useRouter } from 'next/navigation'
import useAxios from '@/hooks/axios/useAxios'
import Link from 'next/link'

const MyDashboard = () => {
    const { userInfo } = useSelector(state => state.user) || {};
    const router = useRouter();
    const { data, error, loading, refetch } = useAxios("user/invitefriendship/all");
    const { data: data2, error: error2, loading: loading2, refetch: refetch2 } = useAxios("user/recent-visitors"); //todo '/user/recent-visitors'

    // console.log('data', data);

    // const statusSum = data?.data?.reduce((sum, item) => {
    //     if (item.status === 'pending') {
    //         return sum + 1;
    //     }
    //     return sum;
    // }, 0);

    let acceptedCount = 0;
    let pendingCount = 0;

    data?.data?.forEach((item) => {
        if (item.status === 'accepted') {
            acceptedCount++;
        } else if (item.status === 'pending') {
            pendingCount++;
        }
    });

    // console.log(pendingCount);

    const {
        location: { city, residencyStatus } = {},
        doctrine: { caste } = {},
        appearance: { height } = {},
        education: { college, education } = {},
        family: { children, livingWith } = {},
        lifestyle: { diet, maritalStatus } = {},
        profession: { employer, income: { min, max } = {}, occupation, workingWith } = {},
        trait: { aboutMe } = {},
        phone, profilePicture: { url } = {},
        fullName,
        firstName,
        lastName,
        userId,
        dateOfBirth,
        postedBy,
        religion,
        community,
        country
    } = userInfo || {};

    // console.log('userInfo', userInfo);

    return (
        <div className='myDashboard container'>
            <div className='myDashboard__topBox'>
                <div className='myDashboard__topBox--left container-box-bg rounded-10'>
                    <div className='profile--img'>
                        <img src={url?.large || imageUrl} alt="Profile" />
                        <div className='flex justify-between align-center px-15 py-10 flex-wrap flex-gap-5'>
                            <div>
                                <h3>{firstName + " " + lastName}</h3>
                                <p className='small-text'>{userId}</p>
                            </div>
                            {/* <Button variant="light" color="red" radius="xl" size="xs">
                                Edit
                            </Button> */}
                        </div>
                        <Divider my={10}></Divider>


                        <div className='flex justify-between align-center px-15 py-10 flex-wrap flex-gap-5'>
                            <div>
                                <p className='small-text'>Account Type</p>
                                <h5>Free Membership</h5>
                            </div>
                            <Button onClick={() => window.open("/plans")} variant="light" color="red" radius="xl" size="xs">
                                Upgrade
                            </Button>
                        </div>
                        <Divider my={10}></Divider>

                        <div className='flex justify-between align-center px-15 py-10 flex-wrap flex-gap-5'>
                            <div>
                                <p className='small-text'>Mobile no. is verified</p>
                                <Anchor href="/" target="_blank">
                                    Verify your ID
                                </Anchor>
                            </div>
                            <ThemeIconComp iconComp={<IconCheck size={16} />} />
                        </div>
                    </div>
                </div>

                <div className='myDashboard__topBox--middle'>
                    <h3>Your Activity</h3>
                    <div className='container-box-bg flex justify-between p-15 flex-wrap mt-10'>
                        <div className='pointer'>
                            <Link href="/sent" style={{ color: 'black' }}>
                                <h2>{pendingCount ? pendingCount : ''}</h2>
                                <p>Pending Invitations</p>
                            </Link>
                        </div>
                        <Divider size="sm" style={{ height: '60px' }} orientation="vertical" />
                        <div>
                            <Link href="/accepted" style={{ color: 'black' }}>
                                <h2>{acceptedCount}</h2>
                                <p>Accepted Invitations</p>
                            </Link>
                        </div>
                        <Divider size="sm" style={{ height: '60px' }} orientation="vertical" />
                        <div>
                            <div className='flex align-center flex-gap-5'>
                                {/* <h2>{pendingCount}</h2> */}
                                <h2>{data2?.data?.length}</h2>
                                {/* <Badge variant="outline" color="pink">
                                    5 New
                                </Badge> */}
                            </div>
                            <p>Recent Visitors</p>
                        </div>
                    </div>

                    <div className='container-box-bg flex justify-between p-15 mt-15 flex-wrap'>
                        <div className='flex align-center flex-gap-5'>
                            <p>Only Premium <Anchor href="/" target="_blank">
                                Members
                            </Anchor> <br /> can avail these benefits</p>
                            <ThemeIconComp iconComp={<IconLock size={16} />} />
                        </div>
                        <Divider size="sm" style={{ height: '60px' }} orientation="vertical" />
                        <div>
                            <h2 className='opacity-4'>0</h2>
                            <p className='opacity-4'>Contacts viewed</p>
                        </div>
                        <Divider size="sm" style={{ height: '60px' }} orientation="vertical" />
                        <div>
                            <div className='flex align-center flex-gap-5'>
                                <h2 className='opacity-4'>0</h2>
                            </div>
                            <p className='opacity-4'>Chats initiated</p>
                        </div>
                    </div>

                    <h3 className='mt-25'>Profile Updated</h3>
                    <div className='container-box-bg p-15 mt-10 flex-wrap profile-updated'>
                        <div className='premium-img'>
                            <img src="/profile/premium.svg" alt="Premium" />
                        </div>
                        <div className='flex flex-column justify-between'>
                            <h3>Your Profile is how your Matches
                                see you. Thanks for improving it</h3>

                            <div className='flex flex-column align-center'>
                                <p className='mb-5'>Go ahead, check out your Matches</p>
                                <Button
                                    size="md"
                                    radius="xl"
                                    // leftIcon={<IconArrowNarrowLeft />}
                                    style={btnBackground} type="button"
                                    className={`button`}
                                    onClick={() => router.push('/todays-matches')}
                                >
                                    View Today's Match
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='myDashboard__topBox--right container-box-bg rounded-10'>
                    <div className='off-img'>
                        <img src="/profile/off.png" alt="off" />
                    </div>
                </div>
            </div>
            <MyDashboardBottom></MyDashboardBottom>
        </div>
    )
}

export default MyDashboard