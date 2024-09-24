import type { NextApiRequest, NextApiResponse } from 'next'
 
interface  ResponseData {
  location: Location | null,
  social: SocialMedia,
  phone: Phone
}

interface  Location {
  country: string;
  city: string;
  street: string;
}

interface  SocialMedia  {
  email: string;
  skype: string;
  telegram: string;
}

interface  Phone  {
  suport: string | null;
  office: string;
  personal: string;
}

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const response:ResponseData={
    location:{ 
      city:"Jakarta", 
      country:"Indonesia", 
      street:"Jl.Jalan"
    },
    phone:{
      office:"02168867",
      personal:"08515567861", 
      suport: null
    },
    social: {
      email:"shiddiq@gmail.com",
      skype:"@shiddiq",
      telegram:"@shiddiq"
    }
  }
  res.status(200).json(response)
}