import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberSince } from "../utils/functions";
import LikeProfile from "./LikeProfile";

const ProfileInfo = ({ userProfile }) => {
	
	const memberSince = formatMemberSince(userProfile?.created_at);

	return (
		<div className='lg:w-1/3 w-full flex flex-col gap-2 lg:sticky md:top-10'>
			<div className='bg-glass rounded-lg p-4'>
				<div className='flex gap-3 items-center'>
					{/* Avatar do Usuário */}
					<a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
						<img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
					</a>
					{/* Ver no Github */}

					<div className='flex gap-2 items-center flex-col'>
						<LikeProfile userProfile={userProfile} />
						<a
							href={userProfile?.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
						>
							<FaEye size={16} />
							Ver no GitHub
						</a>
					</div>
				</div>

				{/* Bio do Usuário */}
				{userProfile?.bio ? (
					<div className='flex items-center gap-2'>
						<TfiThought />
						<p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
					</div>
				) : null}

				{/* Localização */}
				{userProfile?.location ? (
					<div className='flex items-center gap-2'>
						<IoLocationOutline />
						{userProfile?.location}
					</div>
				) : null}

				{/* Perfil do twitter */}
				{userProfile?.twitter_username ? (
					<a
						href={`https://twitter.com/${userProfile.twitter_username}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 hover:text-sky-500'
					>
						<FaXTwitter />
						{userProfile?.twitter_username}
					</a>
				) : null}

				{/* Data de criação do perfil */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Membro desde</p>
					<p className=''>{memberSince}</p>
				</div>

				{/* Email */}
				{userProfile?.email && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Email address</p>
						<p className=''>{userProfile.email}</p>
					</div>
				)}

				{/* Nome completo */}
				{userProfile?.name && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Nome completo</p>
						<p className=''>{userProfile?.name}</p>
					</div>
				)}

				{/* Nome de usuário */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Nome de usuário</p>
					<p className=''>{userProfile?.login}</p>
				</div>
			</div>

			<div className='flex flex-wrap gap-2 mx-4'>
				{/* Número de seguidores */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiUserFollowFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Seguidores: {userProfile?.followers}</p>
				</div>

				{/* Número de seguindo */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiUserFollowLine className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Seguindo: {userProfile?.following}</p>
				</div>

				{/* Número de repositórios publicos*/}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Repositórios Públicos: {userProfile?.public_repos}</p>
				</div>

				{/* Numero de gists públicos */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Gists Públicos: {userProfile?.public_gists}</p>
				</div>
			</div>
		</div>
	);
};
export default ProfileInfo;