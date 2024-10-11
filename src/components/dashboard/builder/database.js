import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import postgreslogo from "/public/logo/postgresql.svg";
import mysqllogo from "/public/logo/mysql.svg";
import mongodblogo from "/public/logo/mongodb.svg";
import oraclelogo from "/public/logo/oracle.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

import { Button as LButton } from "./../../form/button";
import { GrConnect } from "react-icons/gr";
import { FaCircleCheck } from "react-icons/fa6";

function DBForm({ onChangedata }) {
  return (
    <Formik
      initialValues={{
        name: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "This field is required.";
        }
        if (!values.host) {
          errors.host = "This field is required.";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ isSubmitting, handleChange, handleBlur, values, errors }) => {
        useEffect(() => {
          onChangedata(values);
        }, [values, onChangedata]);

        return (
          <Form className="grid grid-cols-2 gap-4 py-4">
            <div>
              <Field name="name">
                {({ field }) => (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-left">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      {...field} // Use Formik's field handlers here
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name} // This ensures proper state is maintained
                      className={`col-span-3 ${
                        errors.name
                          ? "border-red-500" // Add red border if error exists and field is touched
                          : ""
                      }`}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <Field name="host">
                {({ field }) => (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="host" className="text-left">
                      Host
                    </Label>
                    <Input
                      id="host"
                      type="text"
                      {...field} // Use Formik's field handlers here
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.host} // This ensures proper state is maintained
                      className={`col-span-3 ${
                        errors.host
                          ? "border-red-500" // Add red border if error exists and field is touched
                          : ""
                      }`}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="host"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <Field name="port">
                {({ field }) => (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="port" className="text-left">
                      Port
                    </Label>
                    <Input
                      id="port"
                      type="number"
                      {...field} // Use Formik's field handlers here
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.port} // This ensures proper state is maintained
                      className={`col-span-3 ${
                        errors.port
                          ? "border-red-500" // Add red border if error exists and field is touched
                          : ""
                      }`}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="port"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <Field name="username">
                {({ field }) => (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="username" className="text-left">
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      {...field} // Use Formik's field handlers here
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username} // This ensures proper state is maintained
                      className={`col-span-3 ${
                        errors.username
                          ? "border-red-500" // Add red border if error exists and field is touched
                          : ""
                      }`}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <Field name="password">
                {({ field }) => (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="password" className="text-left">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      {...field} // Use Formik's field handlers here
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password} // This ensures proper state is maintained
                      className={`col-span-3 ${
                        errors.password
                          ? "border-red-500" // Add red border if error exists and field is touched
                          : ""
                      }`}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <Field name="database">
                {({ field }) => (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="database" className="text-left">
                      Database
                    </Label>
                    <Input
                      id="database"
                      type="database"
                      {...field} // Use Formik's field handlers here
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.database} // This ensures proper state is maintained
                      className={`col-span-3 ${
                        errors.database
                          ? "border-red-500" // Add red border if error exists and field is touched
                          : ""
                      }`}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                name="database"
                component="div"
                className="text-red-500"
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

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

  const [dbConnecting, setDBConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const [data, setData] = useState({});

  const ConnectDatabase = async (data) => {
    setDBConnecting(true);
    fetch("http://localhost:8080/database/connect", {
      method: "post",
      body: JSON.stringify(data),
    }).then((res) => {
      res.status < 400 ? setConnected(true) : setConnected(false);
      setDBConnecting(false);
    });
  };

  const handleChangeData = (data) => {
    setData(data);
  };

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
            <DBForm onChangedata={handleChangeData} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                onBack();
              }}
            >
              <IoMdArrowRoundBack className="mr-2 h-4 w-4" /> Cancel
            </Button>
            <LButton
              onClick={() => {
                ConnectDatabase(data);
              }}
              label="Connect"
              loadingLabel="Connecting"
              successLabel="Reconnect"
              icon={<GrConnect className="w-5 h-5" />}
              successIcon={<FaCircleCheck className="w-5 h-5" />}
              success={connected}
              loading={dbConnecting}
            />
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
