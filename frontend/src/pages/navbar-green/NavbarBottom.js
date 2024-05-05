import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { HiOutlineUser } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

export default function NavbarBottom() {
  return (
    <Navbar className="p-8">
      <NavbarBrand>
        <p className="font-bold text-3xl text-lime-700 pr-8 md:pr-16 lg:pr-32 pl-8 md:pl-16 lg:pl-32">GreenFerns</p>
      </NavbarBrand>
      <NavbarContent className="flex justify-center text-lg font-normal text-teal-950 space-x-2 md:space-x-4 lg:space-x-16">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Link color="foreground" href="#" className="outline-none">
                House plants
              </Link>
            </DropdownTrigger>
            <DropdownMenu className="flex flex-col bg-stone-50 text-lime-700	mt-3 md:mt-4 lg:mt-6 pl-1 pr-2 md:pl-2 md:pr-2 lg:pl-3 lg:pr-3" aria-label="Static Actions">
              <DropdownItem key="spiderplant" className="pb-1 pt-2 md:pb-2 md:pt-2 lg:pb-3 lg:pt-6 text-sm	md:text-base lg:text-lg">Spider Plant (Chlorophytum comosum)</DropdownItem>
              <DropdownItem key="snakeplant" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Snake Plant (Sansevieria trifasciata)</DropdownItem>
              <DropdownItem key="pothos" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Pothos (Epipremnum aureum)</DropdownItem>
              <DropdownItem key="zz" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">ZZ Plant (Zamioculcas zamiifolia)</DropdownItem>
              <DropdownItem key="peacelily" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Peace Lily (Spathiphyllum)</DropdownItem>
              <DropdownItem key="rubber plant" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Rubber Plant (Ficus elastica)</DropdownItem>
              <DropdownItem key="monstera" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Monstera deliciosa</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem >
          <Dropdown>
              <DropdownTrigger>
                <Link color="foreground" href="#" className="outline-none	">
                  Bee-friendly plants
                </Link>
              </DropdownTrigger>
              <DropdownMenu className="flex flex-col bg-stone-50 text-lime-700	mt-3 md:mt-4 lg:mt-6 pl-1 pr-2 md:pl-2 md:pr-2 lg:pl-3 lg:pr-3" aria-label="Static Actions">
                <DropdownItem key="lavender" className="pb-1 pt-2 md:pb-2 md:pt-2 lg:pb-3 lg:pt-6 text-sm	md:text-base lg:text-lg">Lavender (Lavandula)</DropdownItem>
                <DropdownItem key="sunflower" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Sunflowers (Helianthus annuus)</DropdownItem>
                <DropdownItem key="beebalm" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Bee Balm (Monarda)</DropdownItem>
                <DropdownItem key="salvia" className="pb-1  md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Salvia (Salvia spp.)</DropdownItem>
                <DropdownItem key="coneflowers" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Coneflowers (Echinacea)</DropdownItem>
                <DropdownItem key="wild bergamot" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Wild Bergamot (Monarda fistulosa)</DropdownItem>
                <DropdownItem key="catmint" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Catmint (Nepeta)</DropdownItem>
                <DropdownItem key="cosmos" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Cosmos (Cosmos spp.)</DropdownItem>
              </DropdownMenu>
            </Dropdown>
        </NavbarItem>
        <NavbarItem>
        <Dropdown>
            <DropdownTrigger>
              <Link color="foreground" href="#" className="outline-none	">
                Balcony plants
              </Link>
            </DropdownTrigger>
            <DropdownMenu className="flex flex-col bg-stone-50 text-lime-700	mt-3 md:mt-4 lg:mt-6 pl-1 pr-2 md:pl-2 md:pr-2 lg:pl-3 lg:pr-3" aria-label="Static Actions">
              <DropdownItem key="petunia" className="pb-1 pt-2 md:pb-2 md:pt-2 lg:pb-3 lg:pt-6 text-sm	md:text-base lg:text-lg">Petunias (Petunia spp.)</DropdownItem>
              <DropdownItem key="geranium" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Geraniums (Pelargonium spp.)</DropdownItem>
              <DropdownItem key="ferns" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Ferns (Various species)</DropdownItem>
              <DropdownItem key="herbs" className="pb-1  md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Herbs</DropdownItem>
              <DropdownItem key="dwarfcitrus" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Dwarf Citrus Trees (Citrus spp.)</DropdownItem>
              <DropdownItem key="tomatoes" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Tomatoes (Solanum lycopersicum)</DropdownItem>
              <DropdownItem key="coleus" className="pb-1  md:pb-2  lg:pb-3 text-sm	md:text-base lg:text-lg">Coleus (Solenostemon scutellarioides)</DropdownItem>
              <DropdownItem key="begonias" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Begonias (Begonia spp.)</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
        <Dropdown>
            <DropdownTrigger>
              <Link color="foreground" href="#" className="outline-none	">
                Fruits & Vegetables
              </Link>
            </DropdownTrigger>
            <DropdownMenu className="flex flex-col bg-stone-50 text-lime-700	mt-3 md:mt-4 lg:mt-6 pl-1 pr-2 md:pl-2 md:pr-2 lg:pl-3 lg:pr-3" aria-label="Static Actions">
              <DropdownItem key="cucumber" className="pb-1 pt-2 md:pb-2 md:pt-2 lg:pb-3 lg:pt-6 text-sm	md:text-base lg:text-lg">Cucumbers</DropdownItem>
              <DropdownItem key="peppers" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Peppers</DropdownItem>
              <DropdownItem key="melons" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Melons</DropdownItem>
              <DropdownItem key="berries" className="pb-1  md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Berries</DropdownItem>
              <DropdownItem key="beans" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Beans</DropdownItem>
              <DropdownItem key="corn" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Corn</DropdownItem>
              <DropdownItem key="cabbage" className="pb-1  md:pb-2  lg:pb-3 text-sm	md:text-base lg:text-lg">Cabbage</DropdownItem>
              <DropdownItem key="saladgreens" className="pb-1 md:pb-2 lg:pb-3 text-sm	md:text-base lg:text-lg">Salad Greens</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex justify-center pr-16 text-2xl text-lime-700 font-semibold space-x-2 md:space-x-4 lg:space-x-16 ">
        <NavbarItem className="pl-8 md:pl-16 lg:pl-32 ">
          <Link href="#">
            <HiOutlineUser/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            <FiShoppingCart />          
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
