import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AddDatabaseDialog() {
  // Define state for each input field
  const [host, setHost] = useState("")
  const [port, setPort] = useState("")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [database, setDatabase] = useState("")
  const [enabled, setEnabled] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Database</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] w-full">
        <DialogHeader>
          <DialogTitle>Add Database</DialogTitle>
          <DialogDescription>Make changes to your database here. Click save when youre done.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
        <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="host" className="text-left">
              Host
            </Label>
            <Input
              id="host"
              value={host}
              onChange={(e) => setHost(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="port" className="text-left">
              Port
            </Label>
            <Input
              type="number"
              id="port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="username" className="text-left">
              Username
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-left">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="database" className="text-left">
              Database
            </Label>
            <Input
              id="database"
              value={database}
              onChange={(e) => setDatabase(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="enabled" className="text-left">
              Enable
            </Label>
            <div className="flex w-full items-end">
              <Switch
                id="enabled"
                checked={enabled}
                onCheckedChange={(checked) => setEnabled(checked)}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
          <Button type="submit">Connect</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
