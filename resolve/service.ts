import { ClusterDiagram } from "../db/cluster-diagram";
import { V1Service } from "@kubernetes/client-node";

export class ServiceResolvers {
	public static resolve = async (_: any, args: { [argName: string]: any }) => {
		let service = new V1Service();
		service.kind = "Service";
		service.apiVersion = args.apiVersion
		service.spec = args.spec;
		service.metadata = args.metadata;
		let diag = new ClusterDiagram("mongodb://localhost:27017")
		await diag.add(args.cluster, service)
		return service;
	}
}
