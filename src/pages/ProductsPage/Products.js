import React from 'react'
import { Button } from '../../globalStyles'
import { GiCrystalBars } from 'react-icons/gi'
import { GiCutDiamond, GiRock } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Data'

function Products() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Produtos</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Lorem Ipsum</PricingCardPlan>
                <PricingCardCost>A</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque nostrum in, expedita deleniti ratione omnis?
                  </PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>
                    Lorem ipsum dolor sit amet
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>teste</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Lorem Ipsum</PricingCardPlan>
                <PricingCardCost>A</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque nostrum in, expedita deleniti ratione omnis?
                  </PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>
                    Lorem ipsum dolor sit amet
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>teste</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Lorem Ipsum</PricingCardPlan>
                <PricingCardCost>A</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque nostrum in, expedita deleniti ratione omnis?
                  </PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>
                    Lorem ipsum dolor sit amet
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>teste</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  )
}
export default Products
