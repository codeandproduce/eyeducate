docker run \
	--env-file /root/amptone/env.list \
	-v /root/amptone:/src \
	-p 2986:2986 \
	-d ampnode
