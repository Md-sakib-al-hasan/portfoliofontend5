
"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const LightandDarktoggel = ({menu}:{menu?: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const { setTheme } = useTheme()
    const handle = () => {
      setTheme("light")
      if(menu) [
         menu(false)
      ]
    } 
  return (
    <div>
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() =>{ if (menu) {menu(false);} setTheme("light")}}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() =>{ if (menu) {menu(false);} setTheme("dark")}}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() =>{ if (menu) {menu(false);} setTheme("system")}}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default LightandDarktoggel
