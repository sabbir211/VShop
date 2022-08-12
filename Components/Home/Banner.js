import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="mb-8 bg-[url('/bannerBg.png')] bg-center bg-cover flex flex-col-reverse lg:flex-row pt-12">
            <div className="p-6 lg:p-8">
                <Typography variant="small" className="text-orange-600 text-2xl">
                    WE ARE HERE
                </Typography>
                <Typography className="text-4xl lg:text-6xl font-semibold">
                    FOR SAVING YOUR <br />
                    HEALTH, <br />
                    MONEY,  <br />
                    TIME

                </Typography>

            </div>
            <div className="lg:pl-8">
                <Image className='' src={'/bannerImg.png'} width='611' height="405" alt="banner image" />
            </div>
        </div>
    );
};

export default Banner;