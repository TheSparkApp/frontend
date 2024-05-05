import crypto from "crypto";
import { Base64 } from "js-base64";

export default function generateToken(id: number, password: string, accountCreation: string): string {
	const expiryDate = new Date();
	expiryDate.setUTCDate(expiryDate.getUTCDate() + 30);
	const encodedId = Base64.encode(id.toString());
	const encodedExpiryDate = Base64.encode(expiryDate.toISOString());
	const hashedPassword = crypto.createHash("sha512").update(password).digest("hex");
	const hashedAccountCreation = crypto.createHash("sha512").update(accountCreation).digest("hex");
	const combinedHash = crypto
		.createHash("sha512")
		.update(hashedPassword + hashedAccountCreation)
		.digest("hex");
	const token = `DO_NOT_SHARE_THIS_TOKEN_${encodedId}.${encodedExpiryDate}.${combinedHash}`;

	return token;
}

export function validateToken(token: string, password: string, accountCreation: string): boolean {
	const tokenPrefix = "DO_NOT_SHARE_THIS_TOKEN_";
	if (!token.startsWith(tokenPrefix)) {
		return false;
	}
	const actualToken = token.slice(tokenPrefix.length);
	const parts = actualToken.split(".");
	if (parts.length !== 3) {
		return false;
	}
	const [encodedId, encodedExpiryDate, tokenHash] = parts;
	const id = Base64.decode(encodedId);
	const expiryDateStr = Base64.decode(encodedExpiryDate);
	const expiryDate = new Date(expiryDateStr);
	const now = new Date();
	if (expiryDate <= now) {
		return false;
	}
	const hashedPassword = crypto.createHash("sha512").update(password).digest("hex");
	const hashedAccountCreation = crypto.createHash("sha512").update(accountCreation).digest("hex");
	const combinedHash = crypto
		.createHash("sha512")
		.update(hashedPassword + hashedAccountCreation)
		.digest("hex");

	if (tokenHash !== combinedHash) {
		return false;
	}

	return true;
}
