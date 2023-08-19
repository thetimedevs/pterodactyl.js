"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientStats {
    constructor(data) {
        this.memory = data.memory_bytes;
        this.cpu = data.cpu_absolute;
        this.disk = data.disk_bytes;
        this.neting = data.network_rx_bytes;
        this.netout = data.network_tx_bytes;
        this.uptime = data.uptime;
    }
    toJSON() {
        return {
            memory: this.memory,
            cpu: this.cpu,
            disk: this.disk,
            neting: this.neting,
            netout: this.netout,
            uptime: this.uptime
        };
    }
}
exports.default = ClientStats;
