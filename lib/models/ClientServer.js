"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientServer {
    constructor(data) {
        this.serverOwner = data.server_owner;
        this.identifier = data.identifier;
        this.internalId = data.uuid;
        this.uuid = data.uuid;
        this.name = data.name;
        this.description = data.description;
        this.limits = data.limits;
        this.featureLimits = data.feature_limits;
        this.relationships = data.relationships;
        this.is_suspended = data.is_suspended;
        this.is_installing = data.is_installing;
        this.is_transferring = data.is_transferring;
    }
    toJSON() {
        return {
            serverOwner: this.serverOwner,
            identifier: this.identifier,
            uuid: this.uuid,
            name: this.name,
            description: this.description,
            limits: {
                memory: this.limits.memory,
                swap: this.limits.swap,
                disk: this.limits.disk,
                io: this.limits.io,
                cpu: this.limits.cpu
            },
            featureLimits: {
                databases: this.featureLimits.databases,
                allocations: this.featureLimits.allocations
            },
            relationships: this.relationships,
            is_suspended: this.is_suspended,
            is_installing: this.is_installing,
            is_transferring: this.is_transferring
        };
    }
}
exports.default = ClientServer;
