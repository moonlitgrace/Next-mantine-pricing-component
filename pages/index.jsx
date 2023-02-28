import { PricingContainer } from "@/components/PricingContainer";
import { Box } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
   return (
      <>
         <Head>
            <title>Nextjs Mantine pricing component</title>
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
         </Head>
         <Box
            sx={{
               backgroundColor: 'hsl(240, 78%, 98%)',
               height: '100vh',
               position: 'relative',
               width: '100%',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               
               '@media (max-width:755px)': {
                  paddingBlock: '5rem',
                  height: '100%',
               }
            }}
         >
            <PricingContainer />

            {/** design svgs */}
            <Image
               src='/bg-bottom.svg'
               width={300}
               height={250}
               style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0
               }}
            />
            <Image
               src='/bg-top.svg'
               width={200}
               height={500}
               style={{
                  position: 'absolute',
                  top: 0,
                  right: 0
               }}
            />
         </Box>
      </>
   )
}