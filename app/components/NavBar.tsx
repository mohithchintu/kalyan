"use client"
import React, { use, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ishover, setIshover] = useState(false);
    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4">
                    <AcmeLogo />
                    <Link href="#" className="hidden sm:block font-bold text-inherit">Gruhalaxmi Foods</Link>
                </NavbarBrand>

            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">

                <Dropdown placement="bottom-end" isOpen={isOpen}>
                    <DropdownTrigger>
                        {/* <Button
                            variant="faded"
                            radius="full"
                            onMouseEnter={() => {
                                setIshover(true);
                            }}
                            onMouseLeave={() => {
                                setIshover(false);
                            }}
                            onClick={() => setIsOpen(!isOpen)}
                        > */}
                        <Avatar
                            onClick={() => setIsOpen(!isOpen)}
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                        {/* </Button> */}
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        {/* <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem> */}
                        <DropdownItem key="settings">Profile</DropdownItem>
                        <DropdownItem key="team_settings">My Orders</DropdownItem>

                        <DropdownItem key="system">Contact Us</DropdownItem>

                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}


export default NavBar;