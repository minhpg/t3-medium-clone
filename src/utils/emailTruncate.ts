export default function emailTruncate(email?: string | null) {
  if (!email) return;
  const name = email.split("@");
  const nameTruncated = name[0][0] + "*****";
  return nameTruncated + "@" + name[1];
}
