import { config } from 'dotenv-flow';

const env = config().parsed;
export const appConfig = {
  dess: {
    auth: {
      username: env.paris.kokkinos@gmail.com,
      password: env.OdW4xxKy || null,
      passwordHash: env.DESS_AUTH_PASSWORD_HASH || null,
    },
    device: {
      pn: env.Q0033470212699,
      sn: env.Q0033470212699191005,
      devcode: env.DESS_DEVICE_DEVCODE,
      devaddress: env.DESS_DEVICE_DEVADDR,
      batteryVoltage: 24 (env.DEVICE_BATTERY_VOLTAGE ?? '48'),
    },
  },
};
