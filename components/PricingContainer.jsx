import { Box, Flex, Group, Stack, Switch, Text, Title } from '@mantine/core'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const PricingContainer = () => {
   return (
      <>
         <Group
            sx={{
               zIndex: 50
            }}
         >
            <Stack
               spacing={40}
            >
               {/** header section */}
               <Flex
                  direction='column'
                  gap={10}
                  align='center'
               >
                  <Title
                     order={2}
                     color='hsl(233, 13%, 49%)'
                  >Our Pricing</Title>
                  <Box
                     sx={{
                        fontWeight: 700,
                        color: 'hsl(234, 14%, 74%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 19
                     }}
                  >
                     <Text fz={'sm'}>Annually</Text>
                     <Switch
                        defaultChecked
                        onLabel={<MdKeyboardArrowRight size={16} />}
                        offLabel={<MdKeyboardArrowLeft size={16} />}
                     />
                     <Text fz={'sm'}>Monthly</Text>
                  </Box>
               </Flex>
               {/** cards section */}
               <Group>
                  <Flex
                     align={'center'}
                     color={'hsl(232, 13%, 33%)'}
                  >
                     <Box
                        sx={{
                           boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                           height: '22rem',
                           width: '17rem',
                           backgroundColor: 'white',
                           borderRadius: '0.7rem 0 0 0.7rem',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                     >Card</Box>
                     <Box
                        sx={{
                           boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                           height: '25rem',
                           width: '19rem',
                           background: 'linear-gradient(to bottom right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
                           color: 'white',
                           borderRadius: '0.7rem',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                     >Card</Box><Box
                        sx={{
                           boxShadow: '0px 30px 50px -7px rgba(0,0,0,0.1)',
                           height: '22rem',
                           width: '18rem',
                           backgroundColor: 'white',
                           borderRadius: '0 0.7rem 0.7rem 0',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                     >Card</Box>
                  </Flex>
               </Group>
            </Stack>
         </Group>
      </>
   )
}
