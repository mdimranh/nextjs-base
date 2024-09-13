import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import postgreslogo from "/public/logo/postgresql.svg";
import mysqllogo from "/public/logo/mysql.svg";
import mongodblogo from "/public/logo/mongodb.svg";
import oraclelogo from "/public/logo/oracle.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function DatabaseForm({
  onClick,
  dbname,
  logo,
  description,
  expand,
  collapse,
  onBack,
}) {
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [database, setDatabase] = useState("");
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="w-full">
      {expand ? (
        <Card className="w-full bg-primary/5 relative overflow-hidden">
          <CardHeader>
            <div className="flex gap-4 items-center">
              <Image src={logo} alt="logo" width={35} height={35} />
              <div>
                <CardTitle className="font-semibold text-lg">
                  {dbname}
                </CardTitle>
                <CardDescription className="text-sm">
                  {description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
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
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                console.log("Back button clicked");
                onBack();
              }}
            >
              <IoMdArrowRoundBack className="mr-2 h-4 w-4" /> Cancel
            </Button>
            <Button>Connect</Button>
          </CardFooter>
          <div className="absolute -top-10 -right-16 opacity-[0.03] -z-10">
            <Image src={logo} alt="logo" width={400} height={320} />
          </div>
        </Card>
      ) : collapse ? (
        <Card
          className="w-full items-center flex gap-4 h-full p-4 cursor-pointer hover:bg-primary-foreground"
          onClick={onClick}
        >
          <Image src={logo} alt="logo" width={35} height={35} />
          <div className="flex flex-col gap-1">
            <span className="font-bold">{dbname}</span>
            <span className="text-xs text-primary/70 font-semibold">
              {description}
            </span>
          </div>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function AddDatabaseDialog({ selectedDB = "" }) {
  const [selected, setSelected] = useState(selectedDB);

  const cards = {
    postgres: (
      <DatabaseForm
        onClick={() => setSelected("postgres")}
        dbname="PostgeSQL"
        logo={postgreslogo}
        description="World best relational database."
        expand={selected === "postgres"}
        collapse={selected === ""}
        onBack={() => setSelected("")}
      />
    ),
    mysql: (
      <DatabaseForm
        onClick={() => setSelected("mysql")}
        dbname="MySQL"
        logo={mysqllogo}
        description="Open-source relational database."
        expand={selected === "mysql"}
        collapse={selected === ""}
        onBack={() => setSelected("")}
      />
    ),
    oracle: (
      <DatabaseForm
        onClick={() => setSelected("oracle")}
        dbname="oracle"
        logo={oraclelogo}
        description="Best paid relational database."
        expand={selected === "oracle"}
        collapse={selected === ""}
        onBack={() => setSelected("")}
      />
    ),
    mongodb: (
      <DatabaseForm
        onClick={() => setSelected("mongodb")}
        dbname="MongoDB"
        logo={mongodblogo}
        description="Non relational database."
        expand={selected === "mongodb"}
        collapse={selected === ""}
        onBack={() => setSelected("")}
      />
    ),
  };

  const selectedCard = selected ? cards[selected] : null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Database</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[650px] w-full"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Add Database</DialogTitle>
          <DialogDescription>
            Make changes to your database here. Click save when you’re done.
          </DialogDescription>
        </DialogHeader>
        <div
          className={`grid gap-4 ${
            selectedCard ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {selectedCard ||
            Object.entries(cards).map(([key, card]) => (
              <div key={key}>{card}</div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
