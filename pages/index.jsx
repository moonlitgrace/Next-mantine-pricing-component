import { PricingContainer } from "@/components/PricingContainer";
import { ActionIcon, Box, Flex, Group, Switch, Text, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import Link from "next/link";

export default function Home() {
   const { colorScheme, toggleColorScheme } = useMantineColorScheme();
   const theme = useMantineTheme();
   const dark = colorScheme === 'dark';

   return (
      <>
         <Head>
            <title>Nextjs Mantine pricing component</title>
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
         </Head>
         <Box
            sx={{
               backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[10] : 'hsl(240, 78%, 98%)',
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

            {/** dark mode toggler */}
            <Group
               sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  padding: 7,
                  width: '100%'
               }}
            >
               <Flex justify={'space-between'} w={'100%'}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                     <Text fz='sm' fw={600} sx={{ color: dark ? 'gray' : 'gray' }}>Toggle Mode:</Text>
                     <Switch
                        size="md"
                        color={dark ? 'gray' : 'dark'}
                        onLabel={<MdLightMode size={16} stroke={2.5} color={theme.colors.dark[0]} />}
                        offLabel={<MdDarkMode size={16} stroke={2.5} color={theme.colors.blue[6]} />}
                        onClick={toggleColorScheme}
                     />
                  </Box>
                  <Box>
                     <Link href={'https://github.com/sssuneeth/Next-mantine-pricing-component'} target="_blank">
                        <ActionIcon variant="default" radius={'md'} size={'lg'}>
                           <AiFillGithub size={20} />
                        </ActionIcon>
                     </Link>
                  </Box>
               </Flex>
            </Group>

            {/** design svgs */}
            <Image
               src='/bg-bottom.svg'
               alt=""
               priority
               width={300}
               height={250}
               style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  opacity: dark ? 0.2 : 1
               }}
            />
            <Image
               src='/bg-top.svg'
               alt=""
               priority
               width={200}
               height={500}
               style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  opacity: dark ? 0.2 : 1
               }}
            />
         </Box>
      </>
   )
}