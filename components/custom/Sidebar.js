// ** Third Party Component
import classnames from "classnames";
import { Search } from "react-feather";

import {
  Card,
  CardBody,
  CustomInput,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  FormGroup,
  Label,
} from "reactstrap";
import NumberInput from "src/@core/components/number-input";
import Avatar from "src/@core/components/avatar";
import PickerRange from "./DatePickerRange";
import React from "react";

const Sidebar = (props) => {
  // ** Props
  const { sidebarOpen } = props;

  // ** Array of brands
  const brands = [
    {
      title: "Insignia™",
      total: 746,
    },
    {
      title: "Samsung",
      total: 633,
      checked: true,
    },
    {
      title: "Metra",
      total: 591,
    },
    {
      title: "HP",
      total: 530,
    },
    {
      title: "Apple",
      total: 422,
      checked: true,
    },
    {
      title: "GE",
      total: 394,
    },
    {
      title: "Sony",
      total: 350,
    },
    {
      title: "Incipio",
      total: 320,
    },
    {
      title: "KitchenAid",
      total: 318,
    },
    {
      title: "Whirlpool",
      total: 298,
    },
  ];

  return (
    <div className="sidebar">
      <div
        className={classnames("sidebar-shop", {
          show: sidebarOpen,
        })}
      >
        <Card>
          <CardBody>
            <div className="multi-range-price">
              <InputGroup className="mb-2">
                <Input placeholder="Search" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <Search size={14} />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>

            <FormGroup>
              <Label for="select-custom">Sort</Label>
              <Input type="number" min="1" max="999" />
            </FormGroup>

            <FormGroup className="d-flex align-items-center">
              <NumberInput className="w-100" />
            </FormGroup>

            <FormGroup>
              <Label for="select-custom">Color Filter</Label>
              <br />
              <div className="demo-inline-spacing emirTest">
                <Avatar color="primary" size="sm" className="mr-1" />
                <Avatar color="secondary" size="sm" className="mr-1" />
                <Avatar color="success" size="sm" className="mr-1" />
                <Avatar color="danger" size="sm" />
              </div>
            </FormGroup>

            <div className="brands">
              <h6 className="filter-title">Brands</h6>
              <ul className="list-unstyled brand-list">
                {brands.map((brand) => {
                  return (
                    <li key={brand.title} className="formSidebar">
                      <CustomInput
                        type="checkbox"
                        id={brand.title}
                        label={brand.title}
                        defaultChecked={brand.checked}
                      />
                      <span>{brand.total}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <FormGroup>
              <PickerRange />
            </FormGroup>

            <div id="clear-filters">
              <Button color="primary" block>
                Clear All Filters
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
    // </div>
  );
};

export default React.memo(Sidebar);
