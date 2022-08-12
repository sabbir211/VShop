import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import delivery from '../../Images/commitment/Delivery-r.png'
import quality from '../../Images/commitment/quality-r.png'
import refund from '../../Images/commitment/Refund.jpg'
const OurCommitment = () => {
  return (
    <div className='min-h-screen'>
      <Typography variant='h2' className="my-6 lg:my-12" >Our Commitment</Typography>
      <div className='flex justify-between flex-col lg:flex-row'>
        <Card className="w-96">
          <CardBody className="text-center">
            <Image src={delivery} width='150' height='150' alt='delivery boy picture' />
            <Typography variant='h3' className='text-black'>
              Fastest Delivery
            </Typography>
            <Typography>
              We will send your product in your door as soon as possible.
            </Typography>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Typography variant="small">Not satisfied?</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Tell us We will improve
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardBody className="text-center">
            <Image src={quality} width='150' height='150' alt='guarantee picture' />
            <Typography variant='h3' className='text-black'>
              Quality Guarantee
            </Typography>
            <Typography>
              We provide best quality products.Always you will get fresh vegetable
            </Typography>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Typography variant="small">Not satisfied?</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Tell us We will improve
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardBody className="text-center">
            <Image src={refund} width='150' height='150' alt='bal' />
            <Typography variant='h3' className='text-black'>
             Easy Refund Policy
            </Typography>
            <Typography>
              We can feel your problem.So, do not think too much, we will replace your product. 
            </Typography>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Typography variant="small">Not satisfied?</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Tell us We will improve
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OurCommitment;