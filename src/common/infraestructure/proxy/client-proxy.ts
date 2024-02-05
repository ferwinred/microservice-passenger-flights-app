import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { MailQueue } from "../enum";


@Injectable()
export class ClientProxyGlobal {
    constructor(
        private readonly configService: ConfigService
    ){}

    clientProxyFlight(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.configService.get('AMQP_URL'),
                queue: MailQueue.FlightQueue,
            },
        })
    }

}