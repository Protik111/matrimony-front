import { Avatar, Button } from "@mantine/core"

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
    }
]

const BrideGroom = () => {
    return (
        <div className='bridegroom'>
            <h2 className="text-center">Match bride & groom for you</h2>
            <div className="container flex flex-wrap flex-gap-25 align-center justify-center">
                {
                    brides?.map((item, i) => <div className="container-box-bg p-40 text-center">
                        <Avatar mx="auto" size="xl" src={item?.image} alt={item?.name} />
                        <h3 className="mt-5">{item?.name}</h3>
                        <p>{item?.years}</p>
                        <p>{item?.tall}</p>
                        <Button
                            sx={{ backgroundColor: "#e64980", color: "white" }}
                            color="pink"
                            variant="white"
                            className="mt-10"
                        >
                            View Profile
                        </Button>
                    </div>)
                }
            </div>

            <div className="flex justify-center py-30">
                <Button
                    sx={{ width: '180px' }}
                    // color="pink"
                    className="mt-10"
                    size="md"
                >
                    Register Now
                </Button>
            </div>
        </div>
    )
}

export default BrideGroom