import {Card,Page,Layout,TextContainer,Image,Stack,Link,TextField, Heading} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { trophyImage } from "../assets";
import { ProductsCard } from "../components";
import {useState, useCallback} from 'react';

export default function HomePage() {

  const [value, setValue] = useState('');
  const handleChange = useCallback((newValue) => {
    setValue(newValue)
  
  }, []);

  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Name </Heading>
                  <p>
                  <TextField
                    label="Store name"
                    value={value}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                   
                  </p>
                </TextContainer>
              </Stack.Item>
             
            </Stack>
          </Card>
        </Layout.Section>
       
       

      </Layout>
    </Page>
  );
}
