import { notion } from "@/libs/notion"

const main = async () => {
	const listUsersResponse = await notion.users.list({})
	console.log(listUsersResponse)
}

main()
