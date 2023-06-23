<!DOCTYPE html>
<html>
<head>
    <title>Your Page Title</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset('css/index.css') }}">
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>
<body>
<header>
    <!-- Your header HTML code here -->
            <div class="floater">
            @include('components.floating')
            </div>

            @include('components.searchbar')

</header>