/**
 * VPN-related types
 */

export interface IVPNKeyPair {
  privateKey: string;
  publicKey: string;
}

export interface IVPNDevice {
  id: string;
  userId: string;
  name: string;
  publicKey: string;
  ipv4Address: string;
  createdAt: Date;
  lastConnected?: Date;
  isActive: boolean;
}

export interface IVPNConfig {
  clientName: string;
  clientPrivateKey: string;
  clientPublicKey: string;
  clientIPv4: string;
  serverPublicKey: string;
  serverEndpoint: string;
  serverPort: number;
  dnsServers: string[];
  keepalive: number;
  mtu: number;
}

export interface IVPNServer {
  id: string;
  name: string;
  location: string;
  country: string;
  endpoint: string;
  port: number;
  publicKey: string;
  load: number;
  isActive: boolean;
}