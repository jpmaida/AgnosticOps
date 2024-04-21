import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Drawer, DrawerActions, DrawerCloseButton, DrawerContent, DrawerContentBody, DrawerHead, DrawerPanelBody, DrawerPanelContent, Gallery, PageSection, PageSectionVariants, SearchInput, Text, TextContent, TextVariants, Toolbar, ToolbarContent, ToolbarFilter, ToolbarItem } from '@patternfly/react-core';
import * as React from 'react';
import activeMQIcon from 'public/images/activemq-core_200x150.png';
import sparkIcon from 'public/images/camel-spark_200x150.png';
import pfIcon from 'public/images/patternfly_logo200x150.png';
import avroIcon from 'public/images/camel-avro_200x150.png';
import dropBoxIcon from 'public/images/camel-dropbox_200x150.png';
import infinispanIcon from 'public/images/camel-infinispan_200x150.png';
import saxonIcon from 'public/images/camel-saxon_200x150.png';
import swaggerIcon from 'public/images/camel-swagger-java_200x150.png';
import azureIcon from 'public/images/FuseConnector_Icons_AzureServices.png';
import restIcon from 'public/images/FuseConnector_Icons_REST.png';

import { data } from './Products';

export const Dashboard: React.FunctionComponent = () => {

  const [isExpanded, setIsExpanded] = React.useState(false);
  const drawerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const icons = {
    pfIcon,
    activeMQIcon,
    sparkIcon,
    avroIcon,
    azureIcon,
    saxonIcon,
    dropBoxIcon,
    infinispanIcon,
    restIcon,
    swaggerIcon
  };
  const [prod, setProduct] = React.useState({
    id: 0,
    name: '',
    icon: '',
    description: '',
    costPerHour: ''
  });


  const onExpand = () => {
    drawerRef.current && drawerRef.current.focus();
  };

  const onClick = (p) => {
    setProduct(p);
    setIsExpanded(!isExpanded);
  };

  const onCloseClick = () => {
    setIsExpanded(false);
  };

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <img src={icons[prod.icon]} style={{ maxWidth: '60px' }} alt={prod.name} title={prod.description} />
        <h3 className="pf-v5-c-title pf-m-2xl" tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          {prod.name}
        </h3>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <TextContent>
          <Text component={TextVariants.p}>
            {prod.description}
          </Text>
          <Text component={TextVariants.small}>
            <em>
              Custo mensal: {prod.costPerHour}
            </em>
          </Text>
        </TextContent>
        <Button variant="primary" ouiaId="Primary" style={{marginTop: '10px'}}>
          Order
        </Button>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );


  return (
    <React.Fragment>
      <Drawer isExpanded={isExpanded} onExpand={onExpand}>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>
            <PageSection variant={PageSectionVariants.light}>
              <TextContent>
                <Text component="h1">PRODERJ MarketPlace</Text>
              </TextContent>
              <Toolbar id="toolbar-produtos">
                <ToolbarContent>
                  <ToolbarItem variant="search-filter">
                    <SearchInput aria-label="Items example search input" />
                  </ToolbarItem>
                  <ToolbarItem>
                    <Button variant="primary">Pesquisar</Button>
                  </ToolbarItem>
                </ToolbarContent>
              </Toolbar>
            </PageSection>
            <PageSection isFilled>
              <Gallery hasGutter aria-label="Selectable card container">
                {data.map((product, key) => (
                  <Card isCompact isClickable id={"clickable-card-example-" + key}>
                    <CardHeader
                      selectableActions={{
                        // eslint-disable-next-line no-console
                        onClickAction: () => onClick(product),
                        selectableActionId: `clickable-card-input-${key}`,
                        selectableActionAriaLabelledby: `clickable-card-example-${key}`,
                        name: 'clickable-card-example'
                      }}
                    >
                      <img src={icons[product.icon]} style={{ maxWidth: '60px' }} alt={product.name} title={product.description} />
                    </CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardBody>{product.description}</CardBody>
                  </Card>
                ))}
              </Gallery>
            </PageSection>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
}
