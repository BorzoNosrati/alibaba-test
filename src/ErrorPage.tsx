export default function ErrorPage({ error }: { error?: string }) {
    return <p style={{
        margin: '50vh',
        textAlign:'center'
    }}>{error || "Page Not Found!"}</p>
}